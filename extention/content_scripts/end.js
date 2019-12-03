setTimeout(parse, 1000)

function parse() {

    if(typeof document.getElementsByClassName('checkout-packageinfo__row--content')[0] === 'undefined') {
        setTimeout(parse, 1000);
    }

    var text5 = '';
    if(typeof document.getElementsByClassName('checkout-packageinfo__row--content')[5] !== 'undefined') {
         text5 = document.getElementsByClassName('checkout-packageinfo__row--content')[5].getElementsByClassName('checkout-packageinfo__text')[0].innerText.split('(')[0];
    }


    var text = document.getElementsByClassName('checkout-packageinfo__row--content')[0].getElementsByTagName('h3')[0].innerText
        + '\n' + document.getElementsByClassName('checkout-packageinfo__row--content')[1].getElementsByClassName('checkout-packageinfo__text')[0].innerText
        + '\n' + document.getElementsByClassName('checkout-packageinfo__row--content')[2].getElementsByClassName('checkout-packageinfo__text')[0].innerText.split('.')[0]
        + '\n' + document.getElementsByClassName('checkout-packageinfo__row--content')[3].getElementsByClassName('checkout-packageinfo__text')[0].innerText.split('\n').join(' ').replace(/\s{2,}/g, ' ')
        + '\n' + document.getElementsByClassName('checkout-packageinfo__row--content')[4].innerText
        + text5
    ;
    console.log(text);
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}