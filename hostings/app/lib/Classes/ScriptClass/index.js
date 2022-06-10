"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = exports.SpreadsheetRangeClasses = exports.SpreadsheetSheetClasses = exports.SpreadsheetClasses = exports.GmailThreadClasses = exports.GmailMessageClasses = exports.GmailLabelClasses = exports.GmailDraftClasses = exports.GmailAttachmentClasses = exports.GmailClasses = exports.CalendarEventGuestClasses = exports.CalendarEventClasses = exports.CalendarClasses = exports.UtilityClasses = exports.ParserClasses = exports.ArrayClasses = exports.DateClasses = exports.LiteralClasses = exports.SystemClasses = void 0;
// Literals
const LiteralClasses = require("./Literal");
exports.LiteralClasses = LiteralClasses;
const DateClasses = require("./Date");
exports.DateClasses = DateClasses;
const ArrayClasses = require("./Array");
exports.ArrayClasses = ArrayClasses;
const ParserClasses = require("./Parser");
exports.ParserClasses = ParserClasses;
const UtilityClasses = require("./Utility");
exports.UtilityClasses = UtilityClasses;
// Google
const CalendarClasses = require("./Calendar");
exports.CalendarClasses = CalendarClasses;
const CalendarEventClasses = require("./CalendarEvent");
exports.CalendarEventClasses = CalendarEventClasses;
const CalendarEventGuestClasses = require("./CalendarEventGuest");
exports.CalendarEventGuestClasses = CalendarEventGuestClasses;
const GmailClasses = require("./Gmail");
exports.GmailClasses = GmailClasses;
const GmailAttachmentClasses = require("./GmailAttachment");
exports.GmailAttachmentClasses = GmailAttachmentClasses;
const GmailDraftClasses = require("./GmailDraft");
exports.GmailDraftClasses = GmailDraftClasses;
const GmailLabelClasses = require("./GmailLabel");
exports.GmailLabelClasses = GmailLabelClasses;
const GmailMessageClasses = require("./GmailMessage");
exports.GmailMessageClasses = GmailMessageClasses;
const GmailThreadClasses = require("./GmailThread");
exports.GmailThreadClasses = GmailThreadClasses;
const SpreadsheetClasses = require("./Spreadsheet");
exports.SpreadsheetClasses = SpreadsheetClasses;
const SpreadsheetSheetClasses = require("./SpreadsheetSheet");
exports.SpreadsheetSheetClasses = SpreadsheetSheetClasses;
const SpreadsheetRangeClasses = require("./SpreadsheetRange");
exports.SpreadsheetRangeClasses = SpreadsheetRangeClasses;
const Search = require("../search");
exports.Search = Search;
const Literals = [
  ...Object.keys(LiteralClasses).map((key) => new LiteralClasses[key]()),
  ...Object.keys(DateClasses).map((key) => new DateClasses[key]()),
  ...Object.keys(ArrayClasses).map((key) => new ArrayClasses[key]()),
];
const Googles = [
  ...Object.keys(CalendarClasses).map((key) => new CalendarClasses[key]()),
  ...Object.keys(CalendarEventClasses).map((key) => new CalendarEventClasses[key]()),
  ...Object.keys(GmailClasses).map((key) => new GmailClasses[key]()),
  ...Object.keys(GmailAttachmentClasses).map((key) => new GmailAttachmentClasses[key]()),
  ...Object.keys(GmailDraftClasses).map((key) => new GmailDraftClasses[key]()),
  ...Object.keys(GmailLabelClasses).map((key) => new GmailLabelClasses[key]()),
  ...Object.keys(GmailMessageClasses).map((key) => new GmailMessageClasses[key]()),
  ...Object.keys(GmailThreadClasses).map((key) => new GmailThreadClasses[key]()),
  ...Object.keys(ParserClasses).map((key) => new ParserClasses[key]()),
  ...Object.keys(UtilityClasses).map((key) => new UtilityClasses[key]()),
  ...Object.keys(SpreadsheetClasses).map((key) => new SpreadsheetClasses[key]()),
  ...Object.keys(SpreadsheetSheetClasses).map((key) => new SpreadsheetSheetClasses[key]()),
  ...Object.keys(SpreadsheetRangeClasses).map((key) => new SpreadsheetRangeClasses[key]()),
];
const SystemClasses = [...Literals, ...Googles];
exports.SystemClasses = SystemClasses;
