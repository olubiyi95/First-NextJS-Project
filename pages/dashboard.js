import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {Layout, Menu } from 'antd';

import Image from 'next/image';
import homelogo from '../public/homelogo.jpeg';




const {Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
};

const items = [
  // getItem("Dasboard"),
  getItem('Administrator', 'sub1', <UserOutlined />, [
   {label:"Create Employee",
   key: "create-employee",
    icon: < DesktopOutlined/>
  },
  {label: "View Employee",
    key: "view-employees",
    icon: <FileOutlined/>
  },
  {label: "Send Message",
    key: "message-employee",
    icon: <PieChartOutlined/>
  }
  ]),
  getItem('View Employees', 'sub2', <TeamOutlined />,[
    {label: "Card View",
      key: "card-view"}
  ]),
];


const dashboard = () => {

  const [currentView, setCurrentView ] = useState("");
  const [collapsed, setCollapsed] = useState(false);

const onClick = (e) => {
  setCurrentView(e.key)
  console.log(currentView, "===current");
}

  return (
      <section className='dashboard-navbar'>
         <nav className="navbar bg-dark px-4 fixed dashboard-navbar-header">
      <Image
          src={homelogo}
          alt="erron-icon"
          width="45px"
          height="35px"
        />
         <h4 className='text-light  me-auto pl-28 items-center'>Lugason</h4>
        </nav>
       <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <p className='text-light px-1'>Dashboard</p>
        <div className="logo" />
        <Menu 
        theme="dark"
        //  defaultSelectedKeys={['1']} 
         mode="inline" 
         items={items}
         onClick={onClick}
         />
      </Sider>
      <Layout className="site-layout">

      {currentView === "" && (
       <Content >
       <div
         className="site-layout-background"
         style={{
           padding: 12,
           minHeight: 360,
         }}
       >
       <h1>Welcome Administrator</h1>
       </div>
     </Content>
      )}
     
      {currentView === "create-employee" && (
       <Content >
       <div
         className="site-layout-background"
         style={{
           padding: 12,
           minHeight: 360,
         }}
       >
       <h1>Create Employee</h1>
       </div>
     </Content>
      )}
       
       {currentView === "view-employees" && (
        <Content  >
        <div
          className="site-layout-background"
          style={{
            padding: 12,
            minHeight: 360,
          }}
        >
         <h1>View Employees</h1>
        </div>
      </Content>
       )}

       {currentView === "message-employee" && (
        <Content  >
        <div
          className="site-layout-background"
          style={{
            padding: 12,
            minHeight: 360,
          }}
        >
         <h1>Send A Message</h1>
        </div>
      </Content>
       )}
       
       {currentView === "card-view" && (
      <Content
      style={{
        margin: '0 16px',
      }}
    >
       <h1>View All Employees</h1>
      <div
        className="site-layout-background"
        style={{
          padding: 12,
          minHeight: 360,
        }}
      >
      
      </div>
    </Content>
       )}
      </Layout>
    </Layout>
    </section>
  )
}

export default dashboard


