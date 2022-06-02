// Literals
import * as LiteralClasses from "./Literal";
import * as DateClasses from "./Date";
import * as ArrayClasses from "./Array";
import * as ParserClasses from "./Parser";
import * as UtilityClasses from "./Utility";
// Google
import * as CalendarClasses from "./Calendar";
import * as CalendarEventClasses from "./CalendarEvent";
import * as CalendarEventGuestClasses from "./CalendarEventGuest";
import * as GmailClasses from "./Gmail";
import * as GmailAttachmentClasses from "./GmailAttachment";
import * as GmailDraftClasses from "./GmailDraft";
import * as GmailLabelClasses from "./GmailLabel";
import * as GmailMessageClasses from "./GmailMessage";
import * as GmailThreadClasses from "./GmailThread";
import * as SpreadsheetClasses from "./Spreadsheet";
import * as SpreadsheetSheetClasses from "./SpreadsheetSheet";
import * as SpreadsheetRangeClasses from "./SpreadsheetRange";
import * as Search from "../search";
import AbstractClasses from "../../../interfaces/SystemClasses/AbstractClasses";

const Literals: AbstractClasses[] = [
  ...Object.keys(LiteralClasses).map((key) => new LiteralClasses[key as keyof typeof LiteralClasses]()),
  ...Object.keys(DateClasses).map((key) => new DateClasses[key as keyof typeof DateClasses]()),
  ...Object.keys(ArrayClasses).map((key) => new ArrayClasses[key as keyof typeof ArrayClasses]()),
];

const Googles: AbstractClasses[] = [
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

const SystemClasses: AbstractClasses[] = [...Literals, ...Googles];

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
  Search,
};
