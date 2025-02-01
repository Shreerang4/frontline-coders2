export type Language = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

export interface NavDropdownItem {
  text: string;
  href: string;
}

export interface NavDropdown {
  title: string;
  items: NavDropdownItem[];
}