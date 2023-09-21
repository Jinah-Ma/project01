$(function(){
    $('#wrap').fullpage({
        anchors:["section1", "section2", "section3", "section4", "section5", "section6"],
        sectionsColor:["#fff","#fff","#fff","#fff","#fff","#fff"],
        navigation:true,
        navigationPosition:'right',
    })
});
// 높이가 생긴다. 100vh로 잡힌다.(도큐먼트 레디가 이걸로 바뀌었다.★)