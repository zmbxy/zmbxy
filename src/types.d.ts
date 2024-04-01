interface NavItem {
  name: string;
  href?: string;
  children?: Required<Omit<NavItem, 'children'>>[];
}
