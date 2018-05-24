window.onload = () => {
    by_id("continue_arrow").style["display"] = "none";
    set_style("back", "display", "unset");

    let sidebar_items = by_id("sidebar").children;
    let items = ["Item1", "2",
        "3", "4"];
    let counter = 0;
    for (let i = 0; i < sidebar_items.length; i++) {
        if (sidebar_items[i].tagName === "DIV") {
            sidebar_items[i].innerHTML = items[counter];
            counter += 1;
        }
    }
};