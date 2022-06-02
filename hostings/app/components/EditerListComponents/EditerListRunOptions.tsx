import Grid from "@material-ui/core/Grid";
import * as React from "react";
import useGlobalStyles from "../../styles/useGlobalStyles";
import AbstractRunOptions from "../../interfaces/SystemClasses/RunOptions";
import { OptionClasses } from "../../lib";
import CenterModal from "../CenterModal";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import ListItemText from "@material-ui/core/ListItemText";
import ScrollListItem from "../ScrollListItem";
import TextField from "@material-ui/core/TextField";
import { Editers, useAppDispatch, useAppSelector } from "../../stores";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Collapse from "@material-ui/core/Collapse";
import ReduxRunOptions from "../../interfaces/ReduxClasses/ReduxRunOptions";
import useGlobalLogic from "../../interfaces/logic/useGlobalLogic";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((_) =>
  createStyles({
    Title: {
      paddingTop: "1em",
      paddingBottom: "1em",
      paddingRight: "1em",
    },
  })
);

const useLogic = () => {
  return {
    getUniqueCategories: (options: AbstractRunOptions[]): AbstractRunOptions[] =>
      [...new Set(options.map((e) => e.categoryId))].map((e) => options.find((o) => e === o.categoryId)),
    buttonIsDisabledLogic: (inputs: ReduxRunOptions, specific: AbstractRunOptions, err1: string, err2: string) =>
      [
        inputs?.categoryId === "",
        inputs?.methodId === "",
        specific && specific?.frequency1Argument && inputs.frequency1Argument === "",
        specific && specific?.frequency2Argument && inputs.frequency2Argument === "",
        specific && specific?.frequency1Argument && err1 !== "",
        specific && specific?.frequency2Argument && err2 !== "",
      ].some((e) => e),
  };
};

function EditerListRunOptionsSubOptionInput(props: {
  index: string;
  error: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}): JSX.Element {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    props.setValue(e.currentTarget.value);
  };
  const gs = useGlobalStyles();
  const { clsxJoin } = useGlobalLogic();

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          fullWidth
          value={props.value}
          name={`設定値${props.index}`}
          label={props.placeHolder}
          color="secondary"
          error={props.error !== ""}
          placeholder={props.placeHolder}
          onChange={handleOnChange}
          onBlur={props.onBlur}
        />
        {props.error !== "" && <div className={clsxJoin(gs.text_remark, gs.text_error)}>{props.error}</div>}
      </Grid>
    </React.Fragment>
  );
}

function EditerListRunOptionsSelectList(props: {
  title: string;
  subTitle: string;
  currentItem: string;
  options: { p: string; s: string; v: string; i: string }[];
  action: (value: string) => void;
}) {
  const gs = useGlobalStyles();
  const { clsxJoin } = useGlobalLogic();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <div className={clsxJoin(gs.text_h6, gs.text_align, gs.text_secondary)}>{props.title}</div>
      </Grid>
      <Grid item xs={12}>
        <ListItemText primary={props.subTitle} secondary={props.currentItem} style={{ marginLeft: "0.1em" }} />
      </Grid>
      <Grid item xs={12}>
        <div className={clsxJoin(gs.text_body, gs.text_secondary)}>以下より選択して下さい</div>
        <ScrollListItem itemTexts={props.options} action={props.action} />
      </Grid>
    </React.Fragment>
  );
}

function EditerListRunOptionsModal(props: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const runOptions = useAppSelector((e) => e.editers.RunOptions);
  const dispatch = useAppDispatch();
  const { buttonIsDisabledLogic, getUniqueCategories } = useLogic();
  // 選択値
  const [options] = React.useState<AbstractRunOptions[]>(OptionClasses.RunOptions);
  const [methods, setMethods] = React.useState<AbstractRunOptions[]>([]);
  const [specificMethod, setSpecificMethod] = React.useState<AbstractRunOptions | undefined>(undefined);
  // controledな入力値
  const [argument1, setArgument1] = React.useState<string>("");
  const [argument2, setArgument2] = React.useState<string>("");
  // Error値
  const [subOptError1, setSubOptError1] = React.useState<string>("");
  const [subOptError2, setSubOptError2] = React.useState<string>("");
  // Component  mounted start
  React.useEffect(() => {
    if (runOptions !== undefined) {
      if (runOptions.categoryId !== "") setMethods(options.filter((e) => e.categoryId === runOptions.categoryId));
      if (runOptions.methodId !== "")
        setSpecificMethod(
          options.filter((e) => e.categoryId === runOptions.categoryId).find((e) => e.methodId === runOptions.methodId)
        );
      setArgument2(runOptions.frequency2Argument);
      setArgument1(runOptions.frequency1Argument);
    }
  }, []);
  // 引数情報を更新する
  const handleArgumentUpdate = (innerProps: {
    input: string;
    desc: string;
    reg: RegExp;
    err: React.Dispatch<React.SetStateAction<string>>;
    db: ReduxRunOptions;
  }) => {
    if (innerProps.reg.test(innerProps.input)) {
      dispatch(Editers.updateRunOptionValue(innerProps.db));
      innerProps.err("");
    } else {
      innerProps.err("入力値に誤りがあります = " + specificMethod.frequenct1ArgumentDescription);
    }
  };
  // name要素に応じて処理を分岐する
  const currentNameDispatchBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.currentTarget.name === "設定値1") {
      handleArgumentUpdate({
        input: argument1,
        desc: specificMethod.frequenct1ArgumentDescription,
        reg: specificMethod.frequency1Argument,
        err: setSubOptError1,
        db: { ...runOptions, frequency1Argument: argument1 },
      });
    } else if (e.currentTarget.name === "設定値2") {
      handleArgumentUpdate({
        input: argument2,
        desc: specificMethod.frequenct2ArgumentDescription,
        reg: specificMethod.frequency2Argument,
        err: setSubOptError2,
        db: { ...runOptions, frequency2Argument: argument2 },
      });
    } else {
      console.error(`is not defined ${e.currentTarget.name}. -> ${EditerListRunOptionsModal.name}`);
    }
  };

  const handleCategoryListOnClick = (categoryId: string) => {
    [setArgument1, setArgument2, setSubOptError1, setSubOptError2].forEach((e) => e(""));
    dispatch(
      Editers.updateRunOptionValue({
        ...runOptions,
        categoryId,
        methodId: "",
        frequency1Argument: "",
        frequency2Argument: "",
      })
    );
    setMethods(options.filter((e) => e.categoryId === categoryId));
    setSpecificMethod(undefined);
  };

  const handleMethodListOnClick = (methodId: string) => {
    [setArgument1, setArgument2, setSubOptError1, setSubOptError2].forEach((e) => e(""));
    dispatch(Editers.updateRunOptionValue({ ...runOptions, methodId, frequency1Argument: "", frequency2Argument: "" }));
    setSpecificMethod(
      options.filter((e) => e.categoryId === runOptions.categoryId).find((e) => e.methodId === methodId)
    );
  };

  const handleButtonIsDisabled = () => {
    return buttonIsDisabledLogic(runOptions, specificMethod, subOptError1, subOptError2);
  };

  const handleModalOnClose = () => {
    if (buttonIsDisabledLogic(runOptions, specificMethod, subOptError1, subOptError2))
      dispatch(Editers.deleteRunOptionValue());
    props.setOpenModal(false);
  };

  const handleDelete = () => {
    dispatch(Editers.deleteRunOptionValue());
    handleModalOnClose();
  };

  return (
    <CenterModal open={props.openModal} onClose={handleModalOnClose} style={{ maxHeight: "80vh", maxWidth: "1000px" }}>
      <CardContent>
        <Grid container spacing={2}>
          <EditerListRunOptionsSelectList
            title="リストよりカテゴリを選択"
            subTitle="現在選択中のカテゴリ"
            options={getUniqueCategories(options).map((e) => ({
              p: e.categoryName,
              s: e.categoryDescription,
              v: e.categoryId,
              i: e.cardCategoryIcon,
            }))}
            currentItem={methods.length === 0 ? "未選択" : methods[0].categoryName}
            action={handleCategoryListOnClick}
          />
          {runOptions && runOptions?.categoryId !== "" && (
            <EditerListRunOptionsSelectList
              title=""
              subTitle="現在選択中のトリガー"
              options={methods.map((e) => ({
                p: e.methodName,
                s: e.methodDescription,
                v: e.methodId,
                i: e.cardCategoryIcon,
              }))}
              currentItem={specificMethod === undefined ? "未選択" : specificMethod.methodName}
              action={handleMethodListOnClick}
            />
          )}
          {specificMethod && specificMethod?.frequency1Argument && (
            <EditerListRunOptionsSubOptionInput
              index="1"
              error={subOptError1}
              value={argument1}
              setValue={setArgument1}
              placeHolder={specificMethod.frequenct1ArgumentDescription}
              onBlur={currentNameDispatchBlur}
            />
          )}
          {specificMethod && specificMethod?.frequency2Argument && (
            <EditerListRunOptionsSubOptionInput
              index="2"
              error={subOptError2}
              value={argument2}
              setValue={setArgument2}
              placeHolder={specificMethod.frequenct2ArgumentDescription}
              onBlur={currentNameDispatchBlur}
            />
          )}
          <Grid item xs={12}>
            <ButtonGroup color="secondary" fullWidth>
              <Button onClick={handleDelete}>設定を消去して閉じる</Button>,
              <Button disabled={handleButtonIsDisabled()} onClick={handleModalOnClose}>
                確定
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardContent>
    </CenterModal>
  );
}

/** スクリプトの起動オプションを選択する */
export default function EditerListRunOptions() {
  const classes = useGlobalStyles();
  const lClasses = useStyle();
  // 状態値
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleModalOnOpen = () => {
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      <div className={classes.card_basic} onClick={handleModalOnOpen}>
        <Grid container>
          <Grid item xs={2}>
            <div className={classes.positionCentering}>
              <Icon fontSize="large">power_settings_new</Icon>
            </div>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={9}>
            <ListItemText
              primary="スクリプトの起動方法"
              secondary="定期実行や指定時間実行設定をします"
              className={lClasses.Title}
            />
          </Grid>
        </Grid>
      </div>
      <Collapse in={openModal} timeout="auto" unmountOnExit>
        <EditerListRunOptionsModal openModal={openModal} setOpenModal={setOpenModal} />
      </Collapse>
    </React.Fragment>
  );
}
