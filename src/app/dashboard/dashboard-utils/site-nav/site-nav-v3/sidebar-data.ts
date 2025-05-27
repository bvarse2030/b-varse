/*
|-----------------------------------------
| setting up sidebar-data for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Url } from 'url';
import { ReactNode } from 'react';
import { iconBiPieChartAlt } from '../site-nav-v4/side-nav-react-icons';

export type LINKTYPE = {
  name: string;
  link: Url | string;
  badge?: string;
  id?: string | number;
  icon?: ReactNode | string;
};

export type SIDEBARTYPE = {
  id?: string | number;
  name: string;
  icon?: ReactNode | null;
  content: Array<LINKTYPE>;
  isDropdown?: boolean;
  isActive?: boolean;
  link?: Url | string;
};

export const sidebarDataHome: SIDEBARTYPE[] = [
  {
    id: 10001,
    name: 'Users',
    icon: iconBiPieChartAlt,
    content: [
      { id: 1000101, name: 'All', link: '/dashboard/users/all', icon: iconBiPieChartAlt },
      { id: 1000102, name: 'Admin', link: '/dashboard/users/admin', icon: iconBiPieChartAlt },
      { id: 1000103, name: 'Product Manager', link: '/dashboard/users/product-manager', icon: iconBiPieChartAlt },
      { id: 1000104, name: 'Order Manager', link: '/dashboard/users/order-manager', icon: iconBiPieChartAlt },
    ],
  },
  {
    id: 10002,
    name: 'Role Management',
    icon: iconBiPieChartAlt,
    content: [
      { id: 1000201, name: 'All', link: '/dashboard/role-management/all', icon: iconBiPieChartAlt },
      { id: 1000202, name: 'Admin', link: '/dashboard/role-management/admin', icon: iconBiPieChartAlt },
      { id: 1000203, name: 'Product Manager', link: '/dashboard/role-management/product-manager', icon: iconBiPieChartAlt },
      { id: 1000204, name: 'Order Manager', link: '/dashboard/role-management/order-manager', icon: iconBiPieChartAlt },
    ],
  },
  {
    id: 10003,
    name: 'Category',
    icon: iconBiPieChartAlt,
    content: [{ id: 1000301, name: 'All', link: '/dashboard/category/all', icon: iconBiPieChartAlt }],
  },
  {
    id: 10004,
    name: 'Products',
    icon: iconBiPieChartAlt,
    content: [
      { id: 1000401, name: 'All', link: '/dashboard/products/all', icon: iconBiPieChartAlt },
      { id: 1000402, name: 'Digital', link: '/dashboard/products/digital', icon: iconBiPieChartAlt },
      { id: 1000403, name: 'Physical', link: '/dashboard/products/physical', icon: iconBiPieChartAlt },
    ],
  },
  {
    id: 10005,
    name: 'Orders',
    icon: iconBiPieChartAlt,
    content: [
      { id: 1000501, name: 'All', link: '/dashboard/orders/all', icon: iconBiPieChartAlt },
      { id: 1000502, name: 'Pending', link: '/dashboard/orders/pending', icon: iconBiPieChartAlt },
      { id: 1000503, name: 'Processing', link: '/dashboard/orders/processing', icon: iconBiPieChartAlt },
      { id: 1000504, name: 'Cancel', link: '/dashboard/orders/cancel', icon: iconBiPieChartAlt },
      { id: 1000505, name: 'Holding', link: '/dashboard/orders/holding', icon: iconBiPieChartAlt },
      { id: 1000506, name: 'Delivered', link: '/dashboard/orders/delivered', icon: iconBiPieChartAlt },
      { id: 1000507, name: 'Shipped', link: '/dashboard/orders/shipped', icon: iconBiPieChartAlt },
    ],
  },
  {
    id: 10006,
    name: 'Media',
    icon: iconBiPieChartAlt,
    content: [
      { id: 1000601, name: 'All', link: '/dashboard/media/all', icon: iconBiPieChartAlt },
      { id: 1000602, name: 'Active', link: '/dashboard/media/active', icon: iconBiPieChartAlt },
      { id: 1000603, name: 'Trash', link: '/dashboard/media/trash', icon: iconBiPieChartAlt },
    ],
  },
  {
    id: 10007,
    name: 'Site Setting',
    icon: iconBiPieChartAlt,
    content: [
      { id: 1000701, name: 'Header', link: '/dashboard/site-setting/header', icon: iconBiPieChartAlt },
      { id: 1000702, name: 'Footer', link: '/dashboard/site-setting/footer', icon: iconBiPieChartAlt },
      { id: 1000703, name: 'Home', link: '/dashboard/site-setting/home', icon: iconBiPieChartAlt },
      { id: 1000704, name: 'Info', link: '/dashboard/site-setting/info', icon: iconBiPieChartAlt },
      { id: 1000705, name: 'Contact', link: '/dashboard/site-setting/contact', icon: iconBiPieChartAlt },
      { id: 1000706, name: 'Privacy Policy', link: '/dashboard/site-setting/privacy-policy', icon: iconBiPieChartAlt },
      { id: 1000707, name: 'Terms and Condition', link: '/dashboard/site-setting/terms-and-condition', icon: iconBiPieChartAlt },
    ],
  },
];
