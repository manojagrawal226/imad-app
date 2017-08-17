var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one':{
        title : 'Article one |Manoj',
        heading: 'Article One',
        date : '17 August 2017',
        content :`
                    <p>The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.
                    </p>
                    <p>The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.
                    </p>
                    <p>The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.The contents for my article is here.
                    </p>`,
    },
    'article-two':{
        title : 'Article Two |Manoj',
        heading: 'Article Two',
        date : '17 August 2015',
        content :'<p>The contents for my article is here.</p>',
    },   
    'article-three':{
        title : 'Article Three |Manoj',
        heading: 'Article Three',
        date : '17 August 2014',
        content :`
                    <p>The contents for my article is here.</p>`,
    }   
}
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

        var HtmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewprot" content="width=device-width, initial-scale=1 "/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h1>
                        ${heading}
                    </h1>
                    <div>
                       ${date}
                    </div>
                    <div>
                       ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
        return HtmlTemplate;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res){
    //articleNme = article-one
    //articleName[articles]= {} contents of articles
    var articleName = req.param.articleName;
     res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
