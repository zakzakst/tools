"use client";
import { useState, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import classNames from "classnames";

type MenuItem = Required<MenuProps>["items"][number];

const Links = [
  {
    id: "home",
    link: "/",
  },
  {
    id: "sample",
    link: "/sample",
  },
];

const items: MenuItem[] = [
  {
    key: "home",
    icon: <AppstoreOutlined />,
    label: "ホーム",
  },
  {
    key: "sample",
    icon: <ContainerOutlined />,
    label: "サンプル",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const selectedKeys = useMemo<string[]>(() => {
    const targetLink = Links.find((link) => {
      return link.link === pathname;
    });
    return targetLink ? [targetLink.id] : [];
  }, [pathname]);

  /**
   * メニューに対応するページに遷移
   * @param e クリックされたメニューの情報
   */
  const movePage: MenuProps["onClick"] = (e) => {
    const targetLink = Links.find((link) => {
      return link.id === e.key;
    });
    if (targetLink) {
      router.push(targetLink.link);
    }
  };

  /**
   * 開閉状態の切替
   */
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className="relative">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        className="absolute top-1 left-1"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        selectedKeys={selectedKeys}
        onClick={movePage}
        items={items}
        className={classNames("h-screen", "pt-[36px]", {
          "w-[200px]": !collapsed,
        })}
      />
    </aside>
  );
};

export default Sidebar;
