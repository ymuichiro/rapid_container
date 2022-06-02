// Literals
import * as LiteralClasses from "./ScriptClass/Literal";
import * as DateClasses from "./ScriptClass/Date";
import * as ArrayClasses from "./ScriptClass/Array";
import * as ParserClasses from "./ScriptClass/Parser";
import * as UtilityClasses from "./ScriptClass/Utility";
// Google
import * as CalendarClasses from "./ScriptClass/Calendar";
import * as CalendarEventClasses from "./ScriptClass/CalendarEvent";
import * as CalendarEventGuestClasses from "./ScriptClass/CalendarEventGuest";
import * as GmailClasses from "./ScriptClass/Gmail";
import * as GmailAttachmentClasses from "./ScriptClass/GmailAttachment";
import * as GmailDraftClasses from "./ScriptClass/GmailDraft";
import * as GmailLabelClasses from "./ScriptClass/GmailLabel";
import * as GmailMessageClasses from "./ScriptClass/GmailMessage";
import * as GmailThreadClasses from "./ScriptClass/GmailThread";
import * as SpreadsheetClasses from "./ScriptClass/Spreadsheet";
import * as SpreadsheetSheetClasses from "./ScriptClass/SpreadsheetSheet";
import * as SpreadsheetRangeClasses from "./ScriptClass/SpreadsheetRange";
import * as Types from "../type";

const Literals: Types.ServerClasses[] = [
  ...Object.keys(LiteralClasses).map((key) => new LiteralClasses[key as keyof typeof LiteralClasses]()),
  ...Object.keys(DateClasses).map((key) => new DateClasses[key as keyof typeof DateClasses]()),
  ...Object.keys(ArrayClasses).map((key) => new ArrayClasses[key as keyof typeof ArrayClasses]()),
];

const Googles: Types.ServerClasses[] = [
  ...Object.keys(CalendarClasses).map((key) => new CalendarClasses[key as keyof typeof CalendarClasses]()),
  ...Object.keys(CalendarEventClasses).map(
    (key) => new CalendarEventClasses[key as keyof typeof CalendarEventClasses]()
  ),
  ...Object.keys(GmailClasses).map((key) => new GmailClasses[key as keyof typeof GmailClasses]()),
  ...Object.keys(GmailAttachmentClasses).map(
    (key) => new GmailAttachmentClasses[key as keyof typeof GmailAttachmentClasses]()
  ),
  ...Object.keys(GmailDraftClasses).map((key) => new GmailDraftClasses[key as keyof typeof GmailDraftClasses]()),
  ...Object.keys(GmailLabelClasses).map((key) => new GmailLabelClasses[key as keyof typeof GmailLabelClasses]()),
  ...Object.keys(GmailMessageClasses).map((key) => new GmailMessageClasses[key as keyof typeof GmailMessageClasses]()),
  ...Object.keys(GmailThreadClasses).map((key) => new GmailThreadClasses[key as keyof typeof GmailThreadClasses]()),
  ...Object.keys(ParserClasses).map((key) => new ParserClasses[key as keyof typeof ParserClasses]()),
  ...Object.keys(UtilityClasses).map((key) => new UtilityClasses[key as keyof typeof UtilityClasses]()),
  ...Object.keys(SpreadsheetClasses).map((key) => new SpreadsheetClasses[key as keyof typeof SpreadsheetClasses]()),
  ...Object.keys(SpreadsheetSheetClasses).map(
    (key) => new SpreadsheetSheetClasses[key as keyof typeof SpreadsheetSheetClasses]()
  ),
  ...Object.keys(SpreadsheetRangeClasses).map(
    (key) => new SpreadsheetRangeClasses[key as keyof typeof SpreadsheetRangeClasses]()
  ),
];

const SystemClasses: Types.ServerClasses[] = [...Literals, ...Googles];

export {
  SystemClasses,
  // Literals
  LiteralClasses,
  DateClasses,
  ArrayClasses,
  ParserClasses,
  UtilityClasses,
  // Google
  CalendarClasses,
  CalendarEventClasses,
  CalendarEventGuestClasses,
  GmailClasses,
  GmailAttachmentClasses,
  GmailDraftClasses,
  GmailLabelClasses,
  GmailMessageClasses,
  GmailThreadClasses,
  SpreadsheetClasses,
  SpreadsheetSheetClasses,
  SpreadsheetRangeClasses,
  Types,
};
