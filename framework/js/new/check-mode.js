function checkMode() {
    let textAlign = localStorage.getItem("textAlign");
    if (textAlign == "justify") { function01() }

    let fontFamily1 = localStorage.getItem("fontFamily");
    if (fontFamily1 == "serif") { function02() }

    let fontFamily2 = localStorage.getItem("fontFamily");
    if (fontFamily2 == "sans") { function03() }

    let fontFamily3 = localStorage.getItem("fontFamily");
    if (fontFamily3 == "mono") { function04() }

    let lineHeight1 = localStorage.getItem("lineHeight");
    if (lineHeight1 == "narrow") { function05() }

    let lineHeight2 = localStorage.getItem("lineHeight");
    if (lineHeight2 == "wide") { function06() }

    let bground1 = localStorage.getItem("bground");
    if (bground1 == "yellow") { function07() }

    let bground2 = localStorage.getItem("bground");
    if (bground2 == "green") { function08() }

    let bground3 = localStorage.getItem("bground");
    if (bground3 == "pink") { function09() }

    let links = localStorage.getItem("links");
    if (links == "hidden") { function10() }}