import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';
import { AutoComplete,DataSourceType } from './components/AutoComplete/autoComplete';

library.add(fas)

const App: React.FC = () => {
  const [value, setValue] = useState('')

  // AutoComplete的数据
  // #region
  interface LakerPlayerProps {
    value: string;
    number: number;
  }
  interface GithubUserProps {
    login: string,
    url: string,
    avatar_url: string
  }
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ]
  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  // }
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }
  const handleFetch = (query: string) => {
    return fetch(`http://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <h2>Name: {itemWithGithub.value}</h2>
        <p>Number: {itemWithGithub.url}</p>
      </>
    )
  }
  // #endregion

  return (
    <div className="App">
      <header className="App-header">
        <p>上传组件</p>


        <p>自定义模板</p>
        <AutoComplete style={{width: '300px'}}
           fetchSuggestions={handleFetch} 
           onSelect={(item)=>{console.log(item)}} 
           renderOption={renderOption}
           placeholder='autoComplete'>
        </AutoComplete>

        <p>input组件</p>
        <Input style={{width: '300px'}} value={value} onChange={(e) => setValue(e.target.value)}></Input>
        <Input style={{width: '300px'}} placeholder='default input'></Input>
        <Input style={{width: '300px'}} placeholder='disabled input' disabled></Input>
        <Input style={{width: '300px'}} placeholder='input with icon' icon="search"></Input>
        <Input style={{width: '300px'}} placeholder='large size' size='lg'></Input>
        <Input style={{width: '300px'}} placeholder='small size' size='sm'></Input>
        <Input style={{width: '300px'}} placeholder='predend text' prepend="https://"></Input>
        <Input style={{width: '300px'}} placeholder='append text' append=".com"></Input>

        <Icon icon="arrow-down" theme='primary' size='10x'></Icon>

        <Menu defaultIndex='0' onSelect={(index) => { console.log(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>

          <SubMenu title='drowdown'>
            <MenuItem>
              cool link
            </MenuItem>
            <MenuItem>
              cool link2
            </MenuItem>
          </SubMenu>

          <MenuItem>
            cool link3
          </MenuItem>
        </Menu>

        <Button>普通</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>primary small</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary large</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>default small</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>default large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>danger large</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Hello</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>Hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
