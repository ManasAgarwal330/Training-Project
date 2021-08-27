export const UI_TOGGLE_SIDEBAR = "ui/sidebar_toggle";
export const UI_TOGGLE_SMALL_SIDEBAR = "ui/small_sidebar_toggle";

export const uiSidebarToggle = (open: boolean) => ({
    type: UI_TOGGLE_SIDEBAR,
    payload: open,
  });
  
  export const uiSmallSidebarToggle = (open: boolean) => ({
    type: UI_TOGGLE_SMALL_SIDEBAR,
    payload: open,
  });