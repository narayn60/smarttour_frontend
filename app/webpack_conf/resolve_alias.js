var js_base = "src/js/";
var store_base = js_base + "stores/";
var action_base = js_base + "actions/";
var source_base = js_base + "sources/";

module.exports = {
  AuthStore: store_base + 'AuthStore',
  GuideStore: store_base + 'GuideStore',
  TourStore: store_base + 'TourStore',
  AuthActions: action_base + "AuthActions",
  TourActions: action_base + "TourActions",
  GuideActions: action_base + "GuideActions",
  AuthSource: source_base + "AuthSource",
  GuideSource: source_base + "GuideSource",
  TourSource: source_base + "TourSource",
  alt_base: js_base + "alt",
  base_css: "src/css/base.scss"
}
