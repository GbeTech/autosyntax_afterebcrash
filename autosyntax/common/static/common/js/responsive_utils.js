// TOP SCRIPTS DONT CALL FNS

let normalize = (n) => typeof n === "number" ? n.toString() + "px" : n;

function to_none_mobile() {
    set_style('grid_0', 'display', 'unset');
    set_style('continue_arrow', 'display', 'unset');
    set_style('back', 'display', 'unset');
    set_style('go_up', 'display', 'unset');
    set_style('hamburger', 'display', 'none');
}

function body_margins(top = "50px", right = "60px", bottom = "60px", left = "60px") {
    document.body.style['marginTop'] = normalize(top);
    document.body.style['marginRight'] = normalize(right);
    document.body.style['marginBottom'] = normalize(bottom);
    document.body.style['marginLeft'] = normalize(left);
}

function fonts_sizes(_60, _35, _32, _30, _25, _23, _20, _15) {
    set_style_to_collection('fs60', 'fontSize', normalize(_60));
    //BR 2.5 - DEFAULT 40
    set_style_to_collection('fs35', 'fontSize', normalize(_35));
    set_style_to_collection('fs32', 'fontSize', normalize(_32));
    set_style_to_collection('fs30', 'fontSize', normalize(_30));
    set_style_to_collection('fs25', 'fontSize', normalize(_25));
    set_style_to_collection('fs23', 'fontSize', normalize(_23));
    set_style_to_collection('fs20', 'fontSize', normalize(_20));
    set_style_to_collection('fs15', 'fontSize', normalize(_15));
}

function pad_body(padding_left = "350px") {
    set_style('pad_body', 'paddingLeft', normalize(padding_left));
}

function tops(_88 = "88%", _84 = "84%") {
    set_style_to_collection('top88', 'top', _88);
    set_style_to_collection('top84', 'top', _84);
}

function _left(_90 = "90%") {
    set_style_to_collection('l90', 'left', _90);
}

function heights(_60 = "60px", _30 = "30px") {
    set_style_to_collection('height60', 'height', normalize(_60));
    set_style_to_collection('height30', 'height', normalize(_30));
}

function widths(_60 = "60px", _30 = "30px") {
    set_style_to_collection('width60', 'width', normalize(_60));
    set_style_to_collection('width30', 'width', normalize(_30));
}

function padding_tops(_20 = "20px", _25 = "25px",
                      _40 = "40px", _60 = "60px",
                      _70 = "70px", _80 = '80px',
                      _100 = '100px') {
    set_style_to_collection('pt20', 'paddingTop', _20);

}

function padding_lefts(_20 = "20px", _30 = '30px', _40 = '40px', _45 = '45px', _65 = '65px') {
    set_style_to_collection('pl20', 'paddingLeft', normalize(_20));
    set_style_to_collection('pl30', 'paddingLeft', normalize(_30));
    set_style_to_collection('pl45', 'paddingLeft', normalize(_45));
    set_style_to_collection('pl65', 'paddingLeft', normalize(_65));
}

function margin_rights(_200 = '200px', _300 = '300px', _400 = '400px', _500 = '500px') {
    set_style_to_collection('mr200', 'marginRight', normalize(_200));
    set_style_to_collection('mr300', 'marginRight', normalize(_300));
    set_style_to_collection('mr400', 'marginRight', normalize(_400));
    set_style_to_collection('mr500', 'marginRight', normalize(_500));
}

function margin_tops(_20 = '20px', _25 = '25px') {
    set_style_to_collection('mt20', 'marginTop', normalize(_20));
    set_style_to_collection('mt25', 'marginTop', normalize(_25));

}

function my_ul(em = '2.5em') {
    set_style_to_collection('my-ul', 'paddingLeft', em);
}

function margin_lefts(_100 = '100px', _136 = '136px', _150 = '150px') {
    set_style_to_collection('ml100', 'marginLeft', normalize(_100));
    set_style_to_collection('ml136', 'marginLeft', normalize(_136));
    //PRESS TO TOGGLE .NUTELLA COMPENSATION
    set_style_to_collection('ml150', 'marginLeft', normalize(_150));
}

function back(left = '5%', width = '80px') {
    set_style('back', 'left', left);
    set_style('back', 'width', normalize(width));
}