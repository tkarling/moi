angular.module('quotesApp').service('quotesService', function($window) {
    this.getTitle = function() {
        return "My Quotes";
    };

    var defaultQuotes = [{
        text: 'Life isn\'t about getting and having, it\'s about giving and being.',
        author: 'Kevin Kruse'
    }, {
        text: 'Whatever the mind of man can conceive and believe, it can achieve',
        author: 'Napoleon Hill'
    }, {
        text: 'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein'
    }, {
        text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
        author: 'Robert Frost'
    }, {
        text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
        author: 'Amelia Earhart'
    }, {
        text: 'Life is what happens to you while you\'re busy making other plans.',
        author: 'John Lennon'
    }, {
        text: 'What even is a jQuery?',
        author: 'Tyler S. McGinnis'
    }];


    var quotes = [];

    var updateStrorage = function() {
        // console.log('updateStrorage quotes: ', quotes)
     //    var storeQuotes = quotes.slice();
     //    for(var i = 0; i < storeQuotes.length; i++) {
     //        if(storeQuotes[i].$$hashKey) {
     //            delete storeQuotes[i].$$hashKey;
     //        }
     //    }
     //    // console.log('updateStrorage storeQuotes: ', storeQuotes)
    	// var quotesAsString = JSON.stringify(quotes);
    	// // console.log('updateStrorage: quotesAsString', quotesAsString);
    	// localStorage.setItem('quotes', quotesAsString);

        $window.localStorage['quotes'] = JSON.stringify(quotes);

        // var quotesAsString = angular.fromJson(quotes);
        // $window.localStorage.setItem('quotes', quotesAsString);
    };

    var readStorage = function() {
    	// quotes = JSON.parse(localStorage.getItem('quotes')) || [];

        var srt = $window.localStorage['quotes'] || "";
        // quotes = JSON.parse($window.localStorage['quotes'] || "");
        // console.log('1', quotes);


    	// // if(angular.isUndefined(quotes) || quotes === null) {
     // //        console('hello');
    	// 	quotes = defaultQuotes;
    	// // }
    	// console.log('2', quotes);
    	return quotes;
    };

    this.getData = function() {
        return readStorage();
    };

    this.addData = function(text, author) {
        console.log("text", text);
        if(text && author) {
	        quotes.unshift({
	            text: text,
	            author: author
	        });     
            updateStrorage();
	        // setTimeout(updateStrorage(), 50000);
        }
    };


    this.removeData = function(quote) {
        for (var i = 0; i < quotes.length; i++) {
            if (quotes[i] === quote) {
                quotes.splice(i, 1);
                updateStrorage();
                return;
            }
        }
        console.log("Warning: quotesService: removeData: quote not found", quote);
    };

});
