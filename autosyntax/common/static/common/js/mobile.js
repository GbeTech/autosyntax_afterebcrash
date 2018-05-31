console.log('mobile.js');

function open_hamb_menu() {
    console.warn('menu');
}

function to_mobile() {
    set_style('grid_0', 'display', 'none');
    set_style('continue_arrow', 'display', 'none');
    set_style('back', 'display', 'none');
    set_style('go_up', 'display', 'none');
    set_style('hamburger', 'display', 'unset');
    on_event_do('hamburger_img', 'click', open_hamb_menu);
}

function tablet_portrait() {
    to_mobile();
    // set_style('hamburger', 'position', 'fixed');
    // set_style('hamburger_img', 'position', 'fixed');


    // arrow.set(tablet_landscape_up);
    // BODY
    body_margins(top = 10, right = 10, bottom = 60, left = 30);
    // document.body.style['marginLeft'] = "30px";
    // document.body.style['marginRight'] = "10px";
    // document.body.style['marginTop'] = "10px";


    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();

    // FONT SIZE
    fonts_sizes(_60 = 45, _35 = 35, _32 = 28, _30 = 22, _25 = 20, _23 = 18, _20 = 14, _15 = 15);
    // set_style_to_collection('fs60', 'fontSize', 45);
    //
    // // lorem
    // set_style_to_collection('fs35', 'fontSize', 35);
    // // BR 2.5
    // set_style_to_collection('fs32', 'fontSize', 28);
    //
    // set_style_to_collection('fs30', 'fontSize', 22);
    // set_style_to_collection('fs25', 'fontSize', 20);
    // set_style_to_collection('fs23', 'fontSize', 18);
    //
    // set_style_to_collection('fs20', 'fontSize', 14);
    // set_style_to_collection('fs15', 'fontSize', 15);
    //


    // PAD-BODY
    pad_body(0);
    // set_style_to_collection('pad-body', 'paddingLeft', 0);

    add_class('pad_body', 'row-1');


    //
    tops(_88 = '90%', _84 = '81%');
    // set_style_to_collection('top88', 'top', "90%");
    // set_style_to_collection('top84', 'top', "81%");

    _left('85%');

    // set_style_to_collection('l90', 'left', "85%");
    //

    // HEIGHT WIDTH
    heights(_60 = 40, _30 = 25);
    // set_style_to_collection('height60', 'height', 40);
    // hamburger is 50
    // set_style_to_collection('height30', 'height', 25);
    widths(_60 = 40, _30 = 25);
    // set_style_to_collection('width60', 'width', 40);
    // hamburger is 50
    // set_style_to_collection('width30', 'width', 25);
    //

    // PT PADDING TOP
    padding_tops(_20 = 15);
    set_style_to_collection('pt20', 'paddingTop', 15);


    // PL PADDING LEFT
    let padding_left_40 = "25px";
    padding_lefts(_20 = 15, _30 = 23, _40 = padding_left_40, _45 = 35, _65 = 65);
    // set_style_to_collection('pl20', 'paddingLeft', 15);
    // set_style_to_collection('pl30', 'paddingLeft', 23);

    // set_style_to_collection('pl40', 'paddingLeft', padding_left_40);
    // set_style_to_collection('pl65', 'paddingLeft', 65);


    //
    // //NO USE TO PL45
    // set_style_to_collection('pl45', 'paddingLeft', 35);
    //

    // MR MARGIN RIGHT
    // because pad-body is 180
    margin_rights(_200 = 60, _300 = 30, _400 = 30, _500 = 60);
    // set_style_to_collection('mr400', 'marginRight', 30);
    // set_style_to_collection('mr300', 'marginRight', 30);
    // set_style_to_collection('mr200', 'marginRight', 60);
    // set_style_to_collection('mr500', 'marginRight', 60);


    // MT MARGIN TOP
    margin_tops(_20 = 15, _25 = 20);
    // set_style_to_collection('mt20', 'marginTop', 15);
    // set_style_to_collection('mt25', 'marginTop', 20);


    // MY-UL
    my_ul('1em');
    // set_style_to_collection('my-ul', 'paddingLeft', "1em");

    // ML MARGIN LEFT
    margin_lefts(_100 = 70, _136 = 110, _150 = 120);
    // set_style_to_collection('ml100', 'marginLeft', 70);

    // //PRESS TO TOGGLE .NUTELLA COMPENSATION
    // set_style_to_collection('ml150', 'marginLeft', 120);
    // set_style_to_collection('ml136', 'marginLeft', 110);


    let works = by_class('work');
    for (let i = 0; i < works.length; i++) {
        if (works[i].tagName === "DIV" &&
            works[i].style['paddingLeft'] === padding_left_40) {
            set_style(works[i], 'paddingLeft', 0);
        }
    }
    // set_style('hamburger', 'position', 'fixed');
    // if (filename === undefined || filename === 'cv') {
    //     set_style('go_up', 'fontSize', 23);
    //     set_style('go_up', 'top', "91%");
    //     set_style('go_up', 'left', "83%");
    // }
}