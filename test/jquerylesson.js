// body {
//    background-color: #eef; 
//    padding: 5px;   
// }

// <body>
//     <button type="button" class="js-tickle">Tickle me</button>
//     <br/><br/>
//     <div id="DivOne" class="oddNum">One</div>
//     <div id="DivTwo" class="evenNum">Two</div>
//     <div id="DivThree" class="oddNum">Three</div>
//     <button id="btnOne">Reset odd numbers</button>
//     <button id="btnTwo">Reset even numbers</button>
//     <br/><br/>
//     <form>
//         <label for="jsText">Text</label>
//         <input type="text" class="js-text" id="jsText"/>
//         <br/><br/>
//         <label for="jsRender">Render</label>
//         <div type="text" class="js-render" id="jsRender" disabled="disabled">
//         </div>
//     </form>
// </body>



$('body').on('click', '.js-tickle', function() {
    alert('Haha!');
});


$('.oddNum').css('background-color', '#DEA');
$('#DivTwo').css('background-color', '#FCC');

$('#btnOne').click(function() {
    // Action goes here
    $('.oddNum').css('background-color', '#FFF');
});
$('#btnTwo').click(function() {
    // Action goes here
    $('#DivTwo').css('background-color', '#FFF');
});

$('body').on('keyup', '.js-text', function(ev) {
    <!-- var txt = $(this).val(); -->
    var txt = $('.js-text').val();
    $('.js-render').text(txt);
    <!-- $('.js-render').text('');  DELETE -->
});

$('body').on('click', '.js-add', function() {
    var txt = $('.js-text').val();
    <!-- $('.js-render').text(txt); -->
    var tpl = "<li>html... content and delete button</li>";
    var $copy = $(tpl);
    $copy.find('.js-item-name').text(item);
    $('ul').append($copy);
});

$('body').on('click', '.js-remove', function() {
    $(this).closest('li').remove();
});