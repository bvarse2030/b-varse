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
      { id: 1000201, name: 'All', link: '/dashboard/products/all', icon: iconBiPieChartAlt },
      { id: 1000202, name: 'Digital', link: '/dashboard/products/admin', icon: iconBiPieChartAlt },
      { id: 1000203, name: 'Physical', link: '/dashboard/products/product-manager', icon: iconBiPieChartAlt },
      { id: 1000204, name: 'Order Manager', link: '/dashboard/products/order-manager', icon: iconBiPieChartAlt },
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
    name: 'Category',
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
      { id: 1000601, name: 'Header', link: '/dashboard/media/header', icon: iconBiPieChartAlt },
      { id: 1000602, name: 'Footer', link: '/dashboard/media/footer', icon: iconBiPieChartAlt },
      { id: 1000603, name: 'Home', link: '/dashboard/media/home', icon: iconBiPieChartAlt },
      { id: 1000604, name: 'Info', link: '/dashboard/media/info', icon: iconBiPieChartAlt },
      { id: 1000605, name: 'Contact', link: '/dashboard/media/contact', icon: iconBiPieChartAlt },
      { id: 1000606, name: 'Privacy Policy', link: '/dashboard/media/privacy-policy', icon: iconBiPieChartAlt },
      { id: 1000607, name: 'Terms and Condition', link: '/dashboard/media/terms-and-condition', icon: iconBiPieChartAlt },
    ],
  },
];
