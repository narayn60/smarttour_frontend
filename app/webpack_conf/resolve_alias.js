var js_base = "src/js/";
var store_base = js_base + "stores/";
var action_base = js_base + "actions/";
var source_base = js_base + "sources/";

module.exports = {
  Global:  js_base + 'Global',

  AuthStore: store_base + 'AuthStore',
  GuideStore: store_base + 'GuideStore',
  TourStore: store_base + 'TourStore',
  UserTourStore: store_base + 'UserTourStore',
  MapStore: store_base + 'MapStore',
  NotesStore: store_base + 'NotesStore',

  AuthActions: action_base + "AuthActions",
  TourActions: action_base + "TourActions",
  UserTourActions: action_base + "UserTourActions",
  MapActions: action_base + "MapActions",
  GuideActions: action_base + "GuideActions",
  FormActions: action_base + "FormActions",
  NotesActions: action_base + "NotesActions",

  AuthSource: source_base + "AuthSource",
  GuideSource: source_base + "GuideSource",
  TourSource: source_base + "TourSource",
  LocationSource: source_base + "LocationSource",
  UserTourSource: source_base + "UserTourSource",
  NotesSource: source_base + "NotesSource",

  alt_base: js_base + "alt",
  base_css: "src/css/base.scss"
}
