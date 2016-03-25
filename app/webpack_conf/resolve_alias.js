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
  PersonalTourStore: store_base + 'PersonalTourStore',
  FormStore: store_base + 'FormStore',
  FormStore: store_base + 'FormStore',
  LocationStore: store_base + 'LocationStore',
  NotesStore: store_base + 'NotesStore',
  FormStore: store_base + 'FormStore',
  PhotoStore: store_base + 'PhotoStore',

  AuthActions: action_base + "AuthActions",
  TourActions: action_base + "TourActions",
  UserTourActions: action_base + "UserTourActions",
  PersonalTourActions: action_base + "PersonalTourActions",
  LocationActions: action_base + "LocationActions",
  GuideActions: action_base + "GuideActions",
  FormActions: action_base + "FormActions",
  NotesActions: action_base + "NotesActions",
  PhotoActions: action_base + "PhotoActions",

  AuthSource: source_base + "AuthSource",
  GuideSource: source_base + "GuideSource",
  TourSource: source_base + "TourSource",
  LocationSource: source_base + "LocationSource",
  UserTourSource: source_base + "UserTourSource",
  PersonalTourSource: source_base + "PersonalTourSource",
  NotesSource: source_base + "NotesSource",
  FormSource: source_base + 'FormSource',
  PhotoSource: source_base + 'PhotoSource',

  alt_base: js_base + 'alt',
  base_css: "src/css/base.scss"
}
