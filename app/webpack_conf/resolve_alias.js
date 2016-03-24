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
  MapStore: store_base + 'MapStore',
  AuthActions: action_base + "AuthActions",
  TourActions: action_base + "TourActions",
  UserTourActions: action_base + "UserTourActions",
  PersonalTourActions: action_base + "PersonalTourActions",
  MapActions: action_base + "MapActions",
  GuideActions: action_base + "GuideActions",
  FormActions: action_base + "FormActions",
  AuthSource: source_base + "AuthSource",
  GuideSource: source_base + "GuideSource",
  TourSource: source_base + "TourSource",
  UserTourSource: source_base + "UserTourSource",
  PersonalTourSource: source_base + "PersonalTourSource",
  alt_base: js_base + "alt",
  base_css: "src/css/base.scss"
}
