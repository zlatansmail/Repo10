function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: 'Gary Clark Jr.',
            title: 'The Bright Lights EP',
            release_year: 2011,
            formats: {
                1: 'Vinyl',
                2: 'CD',
                3: 'Stream'
            },
            gold: false
        }
    };
}

myFunction()[2];
module.exports = myFunction;