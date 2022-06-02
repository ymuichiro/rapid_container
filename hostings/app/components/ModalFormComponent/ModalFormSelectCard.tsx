import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { Classes } from "../../lib";
import AbstractClasses from "../../interfaces/SystemClasses/AbstractClasses";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import useGlobalLogic from "../../interfaces/logic/useGlobalLogic";
import useGlobalStyles from "../../styles/useGlobalStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyle = makeStyles((theme) =>
  createStyles({
    listContainer: {
      maxHeight: "60vh",
      overflow: "scroll",
      overflowX: "hidden",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[2],
    },
    expand: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

const ClassesListItemChild = (props: { icon: string; pText: string; sText: string }) => (
  <React.Fragment>
    <ListItemAvatar>
      <Avatar>
        <Icon>{props.icon}</Icon>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={props.pText} secondary={props.sText} />
  </React.Fragment>
);

const ExpandContainer: React.FC<{ expand: boolean; handleExpand: () => void }> = (props) => {
  const ls = useStyle();
  const gs = useGlobalStyles();
  const { clsxSwitch, clsxJoin } = useGlobalLogic();
  return (
    <Grid container>
      <Grid item sm={11} xs={10}>
        <p className={clsxJoin(gs.text_body, gs.text_secondary)} style={{ textAlign: "right" }}>
          カテゴリフィルタ
        </p>
      </Grid>
      <Grid item sm={1} xs={2}>
        <IconButton
          className={clsxSwitch(ls.expand, ls.expandOpen, props.expand)}
          aria-expanded={props.expand}
          aria-label="show more"
          onClick={props.handleExpand}
          title="機能を絞り込む際に開きます"
        >
          <Icon>expand_more</Icon>
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Collapse in={props.expand}>{props.children}</Collapse>
      </Grid>
    </Grid>
  );
};

const InputField = (props: {
  label: string;
  input: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onFocus: () => void;
  onClear: () => void;
}) => {
  const gs = useGlobalStyles();
  const { clsxJoin } = useGlobalLogic();
  return (
    <React.Fragment>
      <TextField
        required
        fullWidth
        variant="outlined"
        color="secondary"
        label={props.label}
        placeholder="キーワードを入力すると絞りこみが出来ます"
        value={props.input}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        error={props.error !== ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="value-clear" title="入力値をクリアします" onClick={props.onClear}>
                <Icon color="action" fontSize="small">
                  close
                </Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Collapse in={props.error !== ""}>
        <div className={clsxJoin(gs.text_body, gs.text_secondary)} style={{ width: "100%" }}>
          {props.error}
        </div>
      </Collapse>
    </React.Fragment>
  );
};

type Action<T> = React.Dispatch<React.SetStateAction<T>>;
type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
interface Args {
  inputCategory: string;
  setInputCategory: React.Dispatch<React.SetStateAction<string>>;
  inputMethod: string;
  setInputMethod: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setClassesUpdater: (category: string, method: string) => void;
}

const useLogic = () => {
  return {
    classesQuery: (v: string) => ({
      category: () => (v === "" ? Classes.Search.getAllCategory() : Classes.Search.getCategoryPartialMatch(v)),
      method: (category: string) =>
        v === "" ? Classes.Search.getAllMethods(category) : Classes.Search.getMethodPartialMatch(v, category),
    }),
    onChangeInit: (v: string, setInput: Action<string>, setCap: Action<number>): void => {
      setInput(v);
      setCap(20);
    },
    handleListViewNums: (setListNums: Action<number>) => ({
      add: (): void => {
        setListNums((e) => e + 20);
      },
      reset: (): void => {
        setListNums(20);
      },
    }),
    handleError: (isError: boolean, setRootError: Action<boolean>, ...setInputErrors: Action<string>[]) => {
      setInputErrors.forEach((sv) => sv(isError ? "入力が正しくありません。リストから選択下さい。" : ""));
      setRootError(isError);
    },
  };
};

export const ModalFormSelectCard = ({
  inputCategory,
  setInputCategory,
  inputMethod,
  setInputMethod,
  setError,
  setClassesUpdater,
}: Args) => {
  // styles
  const ls = useStyle();
  const { classesQuery, onChangeInit, handleError, handleListViewNums } = useLogic();
  // state
  const [errorCategory, setErrorCategory] = React.useState<string>("");
  const [classesCategory, setClassesCategory] = React.useState<AbstractClasses[]>([]);
  const [errorMethod, setErrorMethod] = React.useState<string>("");
  const [classesMethod, setClassesMethod] = React.useState<AbstractClasses[]>([]);
  const [listItemsCap, setListItemsCap] = React.useState<number>(20);
  const [expand, setExpand] = React.useState<boolean>(false);

  const handleExpandChange = () => {
    setExpand(!expand);
  };
  const handleAddListItemsCap = () => {
    handleListViewNums(setListItemsCap).add();
  };
  const handleCategoryInputOnFocus = () => {
    setClassesCategory(classesQuery(inputCategory).category());
  };
  const handleMethodInputOnFocus = () => {
    setClassesMethod(classesQuery(inputMethod).method(inputCategory));
  };
  const handleCategoryInputClear = () => {
    [setInputCategory, setInputMethod].forEach((sv) => sv(""));
  };
  const handleMethodInputClear = () => {
    setInputMethod("");
  };

  const handleCategoryInputOnChange = (e: ChangeEvent): void => {
    onChangeInit(e.currentTarget.value, setInputCategory, setListItemsCap);
    setClassesCategory(classesQuery(e.currentTarget.value).category());
  };
  const handleMethodInputOnChange = (e: ChangeEvent): void => {
    onChangeInit(e.currentTarget.value, setInputMethod, setListItemsCap);
    setClassesMethod(classesQuery(e.currentTarget.value).method(inputCategory));
  };

  const handleCategoryInputOnBlur = (_: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    if (classesCategory.length === 1) {
      setInputCategory(classesCategory[0].categoryId);
      [setClassesCategory, setClassesMethod].forEach((setValue) => setValue([]));
      handleListViewNums(setListItemsCap).reset();
      handleError(!Classes.Search.isCategoryId(inputCategory), setError, setErrorCategory);
    } else {
      inputCategory === ""
        ? setErrorCategory("")
        : handleError(!Classes.Search.isCategoryId(inputCategory), setError, setErrorCategory);
    }
  };

  const handleMethodInputOnBlur = (_: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (classesMethod.length === 1) {
      setExpand(true);
      setInputCategory(classesMethod[0].categoryId);
      setInputMethod(classesMethod[0].methodId);
      [setClassesCategory, setClassesMethod].forEach((setValue) => setValue([]));
      handleListViewNums(setListItemsCap).reset();
      setClassesUpdater(classesMethod[0].categoryId, classesMethod[0].methodId);
      handleError(
        !Classes.Search.isMethodId(classesMethod[0].categoryId, classesMethod[0].methodId),
        setError,
        setErrorCategory,
        setErrorMethod
      );
    } else {
      handleError(!Classes.Search.isMethodId(inputCategory, inputMethod), setError, setErrorMethod);
    }
  };

  const handleCategoryListItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cv = e.currentTarget.getAttribute("data-categoryid");
    setInputCategory(cv);
    handleListViewNums(setListItemsCap).reset();
    [setInputMethod, setErrorMethod, setErrorCategory].forEach((setValue) => setValue(""));
    [setClassesCategory, setClassesMethod].forEach((setValue) => setValue([]));
    handleError(!Classes.Search.isCategoryId(cv), setError, setErrorCategory);
  };

  const handleMethodListItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cv = e.currentTarget.getAttribute("data-categoryid");
    const mv = e.currentTarget.getAttribute("data-methodid");
    setExpand(true);
    setInputCategory(cv);
    setInputMethod(mv);
    handleListViewNums(setListItemsCap).reset();
    [setClassesCategory, setClassesMethod].forEach((setValue) => setValue([]));
    handleError(!Classes.Search.isMethodId(cv, mv), setError, setErrorCategory, setErrorMethod);
    setClassesUpdater(cv, mv);
  };

  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <ExpandContainer expand={expand} handleExpand={handleExpandChange}>
            <InputField
              input={inputCategory}
              label="カテゴリを選択して下さい"
              error={errorCategory}
              onBlur={handleCategoryInputOnBlur}
              onChange={handleCategoryInputOnChange}
              onFocus={handleCategoryInputOnFocus}
              onClear={handleCategoryInputClear}
            />
            <Collapse in={classesCategory.length !== 0} exit={classesCategory.length === 0} unmountOnExit>
              <List className={ls.listContainer} dense>
                {classesCategory
                  .filter((_, i) => i < 20)
                  .map((e, i) => (
                    <ListItem
                      button
                      divider
                      key={i}
                      data-categoryid={e.categoryId}
                      onClick={handleCategoryListItemClick}
                    >
                      <ClassesListItemChild
                        icon={e.cardCategoryIcon}
                        pText={`${e.categoryId}/${e.categoryName}`}
                        sText={e.categoryDescription}
                      />
                    </ListItem>
                  ))}
              </List>
            </Collapse>
          </ExpandContainer>
        </Grid>
        <Grid item xs={12}>
          <InputField
            input={inputMethod}
            label="機能を選択して下さい"
            error={errorMethod}
            onBlur={handleMethodInputOnBlur}
            onChange={handleMethodInputOnChange}
            onFocus={handleMethodInputOnFocus}
            onClear={handleMethodInputClear}
          />
          <Collapse in={classesMethod.length !== 0} exit={classesMethod.length === 0} unmountOnExit>
            <List className={ls.listContainer} dense>
              {classesMethod
                .filter((_, i) => i < listItemsCap)
                .map((e, i) => (
                  <ListItem
                    button
                    divider
                    key={i}
                    data-categoryid={e.categoryId}
                    data-methodid={e.methodId}
                    onClick={handleMethodListItemClick}
                  >
                    <ClassesListItemChild
                      icon={e.cardCategoryIcon}
                      pText={`${e.categoryName}/${e.methodName}`}
                      sText={e.methodDescription}
                    />
                  </ListItem>
                ))}
              {classesMethod.length > listItemsCap && (
                <ListItem divider button onClick={handleAddListItemsCap}>
                  <ClassesListItemChild icon="add" pText={"検索結果を更に表示する"} sText={"追加で20件を表示します"} />
                </ListItem>
              )}
            </List>
          </Collapse>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
