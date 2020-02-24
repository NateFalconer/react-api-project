import React, { Component } from 'react';


class HomePage extends Component {

    showTheQuote = () => {
        return <p>{this.props.randomQuote}</p>
    }

    filterTheQuote = () => {
        let filteredQuote = this.props.randomQuote.toString().toLowerCase();
        let extraFilter = filteredQuote.replace(/[.?!:;',]/g, "");
        let uselessWordArray = [
            "a", "at", "be", "cant", "are", "could", "for", 
            "do", "does", "how", "i", "in", "is", "many", "much", "of", 
            "on", "or", "should", "shouldnt", "so", "such", "the", 
            "them", "they", "to", "us", "we", "what", "who", "why", 
            "with", "wont", "would", "wouldnt", "you", "going", "less", 
            "because", "no", "too", "only", "and", "its", "its", "me", "one", "get", 
            "theres", "way", "an", "when", "from", "which", "about", "being", 
            "that", "unless", "but", "every", "this", "if", "use", "some", "have", 
            "all", "was", "have", "just", "my", "has", "then", "by", "try", "not", 
            "doesnt", "had", "let", "dont", "really", "like", "will", 
            "into", "under", "three", "wanna", "now", "things", "want",
            "here", "never", "your", "good", "youre", "puts", "put", "until", "im", "please",
            "thank", "without", "heres", "says", "ill", "go", "began", "before", "any",
            "over", "can", "been", "whats", "he", "his", "except", "still",
            "always", "am", "call", "same", "time", "there", "it", "youve",
            "ive",
          ];

        let expStr = uselessWordArray.join("|");
        console.log(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ');
        let finalQuote = extraFilter.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ').replace(/\s{2,}/g, ' ');
        console.log(finalQuote);
        let searchTerms = finalQuote.split(' ');
        if (searchTerms[0] === "") {
            searchTerms.splice(0, 1)
        }
        if (searchTerms[searchTerms.length-1] === "") {
            searchTerms.splice(searchTerms.length-1, 1)
        }
        console.log(searchTerms)
    }

    render() {
        return (
            <div>
                <h1>Swansonews</h1>
                <h2>{this.showTheQuote()}</h2>
                {this.filterTheQuote()}

            </div>
        );
    }
}

export default HomePage;