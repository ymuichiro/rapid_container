import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createNewHash } from "./functions";
import { ROOT_KEY } from "../../lib";
import { swapDown as down, swapUp as up } from "../../lib/TextParser/utilitiy";
import { insertValueInBetween } from "../../lib/TextParser/utilitiy";
import { InputClassesData } from "../../interfaces/ReduxClasses/InputClasses";
import EditersState from "../../interfaces/ReduxClasses/EditersState";
import EditerStateCurrentArea from "../../interfaces/ReduxClasses/EditerStateCurrentArea";
import ReduxRunOptions from "../../interfaces/ReduxClasses/ReduxRunOptions";

// define state type & initial state value
const initialState: EditersState = {
  current: [
    {
      currentGroupId: ROOT_KEY,
      currentParentCardId: ROOT_KEY,
      currentParentGroupId: ROOT_KEY,
      argsFromParent: [],
    },
  ],
  RunOptions: {
    categoryId: "",
    methodId: "",
    frequency1Argument: "",
    frequency2Argument: "",
  },
  entities: {
    [ROOT_KEY]: [],
  },
};

// define reducer & action
const slice = createSlice({
  name: "editers",
  initialState,
  reducers: {
    /** update values of run options */
    updateRunOptionValue: (state, action: PayloadAction<ReduxRunOptions>): EditersState => {
      return {
        ...state,
        RunOptions: { ...action.payload },
      };
    },
    /** delete values of run options */
    deleteRunOptionValue: (state): EditersState => {
      return {
        ...state,
        RunOptions: {
          categoryId: "",
          methodId: "",
          frequency1Argument: "",
          frequency2Argument: "",
        },
      };
    },
    /** Update Current & move window */
    moveNextWindow: (state, action: PayloadAction<EditerStateCurrentArea>): EditersState => {
      if (state.current.length === 0) {
        const k = ROOT_KEY;
        return {
          ...state,
          current: [
            ...[
              {
                currentGroupId: k,
                currentParentCardId: k,
                currentParentGroupId: k,
                argsFromParent: [],
              },
            ],
            action.payload,
          ],
        };
      } else {
        return { ...state, current: [...state.current, action.payload] };
      }
    },
    movePrevWindow: (state): EditersState => {
      if (state.current.length === 0) {
        const k = ROOT_KEY;
        return {
          ...state,
          current: [
            {
              currentGroupId: k,
              currentParentCardId: k,
              currentParentGroupId: k,
              argsFromParent: [],
            },
          ],
        };
      } else if (state.current.length === 1) {
        return { ...state };
      } else {
        return {
          ...state,
          current: state.current.filter((_, i) => i !== state.current.length - 1),
        };
      }
    },

    /** Entities??????????????????????????????????????? */
    addBlankBox: (state, action: PayloadAction<{ position: number }>): EditersState => {
      const currentIndex = state.current.length - 1;
      const newCard: InputClassesData = {
        id: createNewHash(state.entities[state.current[currentIndex].currentGroupId]),
        categoryId: "",
        methodId: "",
        inputBaseValue: "",
        inputArgumentValue: [],
        outputVariableName: "",
        comment: "",
        groupId: state.current[currentIndex].currentGroupId,
        childGroupId: "",
        parentGroup: {
          grouptId: state.current[currentIndex].currentParentGroupId,
          id: state.current[currentIndex].currentParentCardId,
        },
      };
      return {
        ...state,
        entities: {
          ...state.entities,
          [state.current[currentIndex].currentGroupId]: insertValueInBetween(
            state.entities[state.current[currentIndex].currentGroupId],
            action.payload.position,
            newCard
          ),
        },
      };
    },

    /** ????????????????????????????????? */
    deleteNoDataCard: (state): EditersState => {
      const currentIndex = state.current.length - 1;
      return {
        ...state,
        entities: {
          ...state.entities,
          [state.current[currentIndex].currentGroupId]: state.entities[
            state.current[currentIndex].currentGroupId
          ].filter((e) => e.categoryId !== ""),
        },
      };
    },

    /** ?????????????????????????????????(clinet???????????????functions??????GourpID???????????????????????????) */
    createGroup: (state, action: PayloadAction<{ groupId: string }>): EditersState => {
      if (state.entities[action.payload.groupId] !== undefined) {
        console.error("Redux???????????????????????????????????????????????????????????????" + action.payload.groupId + "????????????????????????");
        return { ...state };
      } else {
        return {
          ...state,
          entities: { ...state.entities, [action.payload.groupId]: [] },
        };
      }
    },

    /** ??????????????????????????? */
    deleteGroup: (state, action: PayloadAction<{ groupId: string }>): EditersState => {
      if (state.entities[action.payload.groupId] === undefined) {
        console.error("Redux??????????????????????????????????????????????????????????????????" + action.payload.groupId + "?????????????????????");
        return { ...state };
      } else {
        const newEntities: EditersState["entities"] = {};

        // ???Group?????????????????????????????????GroupID????????????????????????
        let childGroups: string[] = [];
        const getChildGroupId = (groupIds: string[]) => {
          const ids = groupIds
            .map((groupId) => state.entities[groupId].filter((e) => e.childGroupId !== ""))
            .flatMap((e) => e)
            .map((e) => e.childGroupId);
          if (ids.length === 0) return;
          childGroups = [...new Set([...childGroups, ...ids])];
          getChildGroupId(childGroups);
        };
        getChildGroupId([action.payload.groupId]);

        Object.keys(state.entities)
          .filter((e) => childGroups.indexOf(e) === -1)
          .forEach((e) => {
            newEntities[e] = state.entities[e];
          });
        return { ...state, entities: { ...newEntities } };
      }
    },

    /** Entities????????????????????????????????? */
    update: (state, action: PayloadAction<Omit<InputClassesData, "parentGroup" | "groupId">>): EditersState => {
      const currentIndex = state.current.length - 1;
      return {
        ...state,
        entities: {
          ...state.entities,
          [state.current[currentIndex].currentGroupId]: state.entities[state.current[currentIndex].currentGroupId].map<
            InputClassesData
          >((data) => {
            return data.id === action.payload.id
              ? {
                  ...action.payload,
                  parentGroup: data.parentGroup,
                  groupId: data.groupId,
                }
              : { ...data };
          }),
        },
      };
    },

    remove: (state, action: PayloadAction<{ id: string }>): EditersState => {
      const currentIndex = state.current.length - 1;
      return {
        ...state,
        entities: {
          ...state.entities,
          [state.current[currentIndex].currentGroupId]: state.entities[
            state.current[currentIndex].currentGroupId
          ].filter((e) => e.id !== action.payload.id),
        },
      };
    },

    swapUp: (state, action: PayloadAction<{ id: string }>): EditersState => {
      const currentIndex = state.current.length - 1;
      const position = state.entities[state.current[currentIndex].currentGroupId].findIndex(
        (e) => e.id === action.payload.id
      );
      return {
        ...state,
        entities: {
          ...state.entities,
          [state.current[currentIndex].currentGroupId]: up(
            [...state.entities[state.current[currentIndex].currentGroupId]],
            position - 1
          ),
        },
      };
    },

    swapDown: (state, action: PayloadAction<{ id: string }>): EditersState => {
      const currentIndex = state.current.length - 1;
      const position = state.entities[state.current[currentIndex].currentGroupId].findIndex(
        (e) => e.id === action.payload.id
      );
      return {
        ...state,
        entities: {
          ...state.entities,
          [state.current[currentIndex].currentGroupId]: down(
            [...state.entities[state.current[currentIndex].currentGroupId]],
            position + 1
          ),
        },
      };
    },

    importJson: (_, action: PayloadAction<EditersState>): EditersState => {
      return { ...action.payload };
    },
  },
});

export type State = typeof initialState;
export const {
  addBlankBox,
  deleteNoDataCard,
  update,
  remove,
  swapDown,
  swapUp,
  moveNextWindow,
  movePrevWindow,
  createGroup,
  deleteGroup,
  importJson,
  deleteRunOptionValue,
  updateRunOptionValue,
} = slice.actions;
export default slice.reducer;
