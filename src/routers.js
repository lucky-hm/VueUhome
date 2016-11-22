import loginRegister from './loginRegister'
import main1 from './main1'
import home from './components/home'
import society from './components/society'
import life from './components/life'
import neighbor from './components/neighbor'
export default [
  { path: '/loginRegister', component: loginRegister },
  { path: '/main',
    component: main1,
    children: [
      {path: 'home', component: home},
      {path: 'society', component: society},
      {path: 'life', component: life},
      {path: 'neighbor', component: neighbor}
    ]
  },
  { path: '*', component: loginRegister }
]
