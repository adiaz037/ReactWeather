var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

//the IndexRoute renders when the default URL is used, in this case it renders the weather component. otherwise it gets overridden when there are other URLS 
//The Weather Component gets rendered when the URL is  'http://localhost:3000/#/?_k=rqkv9o'
//but the About component gets rendered when the URL is 'http://localhost:3000/#/about?_k=rqkv9o'
//the hashHistory thing makes it so that the URL uses a consisitant format of /#/****
