// let is_main_page = true;
// screen.orientation.lock('landscape');
console.log('home.layout.js\n');
let filename = window.location.pathname
    .split("/")
    .filter(c => c.length)
    .pop();
console.log('filename: ', filename);
let is_go_up_visible = false;

on_event_do(window, "scroll",
    () => {
        // PERSISTS AS LONG AS LAYOUT.HTML IS EXTENDED FROM (i.e always)
        first_scroll_fade_ins();
        show_console_menu();
    });

on_event_do("go_up", "click",
    () => scroll_to(document.body));

let is_console_menu_vis = false;
on_event_do("console_menu", "mouseover", show_console_menu);
on_event_do("console_menu", "click", hide_console_menu);

on_event_do("continue_arrow", "mouseover", display_continue_arrow_lbl);
on_event_do("continue_arrow", "mouseleave", hide_continue_arrow_lbl);


on_event_do_to_collection("download-link", "click",
    () => scroll_to("download_content"));

on_event_do("continue_arrow", "click",
    () => decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1));

increase_opacity(by_id("all"), 1, factor = 0.5);


function first_scroll_fade_ins() {
    // PERSISTS
    if (window.scrollY >= 100 && !is_go_up_visible) {
        is_go_up_visible = true;
        increase_opacity(by_id("go_up"), 0.7, factor = 1);
        set_style("continue_arrow", "left", "14%");
        set_style("continue_arrow_lbl", "left", "12.8%");
        decrease_opacity(by_id("continue_arrow"), 0.7, factor = 0.05);
    }
    else if (window.scrollY <= 100 && is_go_up_visible) {
        // console.log('\nscrolled up, lbl 48.6%\n');
        is_go_up_visible = false;
        decrease_opacity(by_id("go_up"), 0, factor = 1);
        set_style("continue_arrow", "left", "49.8%");
        set_style("continue_arrow_lbl", "left", "48.6%");
        increase_opacity(by_id("continue_arrow"), 1, factor = 0.05);
    }
}


function hide_console_menu() {
    if (is_console_menu_vis) { //if menu visible
        // hide menu
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++)
            decrease_opacity(sidebar_items[i], 0, factor = 1);

        // flag menu hidden
        is_console_menu_vis = false;
    }
}

function show_console_menu() {
    // PERSISTS
    if (!is_console_menu_vis) {
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++)
            increase_opacity(sidebar_items[i], 1, factor = 1);

        is_console_menu_vis = true;
    }


}

