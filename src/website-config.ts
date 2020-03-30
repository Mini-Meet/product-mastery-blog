export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  linkedin?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Product Mastery',
  description: 'We Train Product Managers to Double Their Salary & Build Great Products within 12 months',
  coverImage: 'img/blog-cover-trees.jpg',
  logo: 'img/pm-logo.svg',
  lang: 'en',
  siteUrl: 'https://blog.productmastery.co',
  linkedin: 'https://www.linkedin.com/in/henry-latham-a78245a6/',
  twitter: 'https://twitter.com/tryghost',
  showSubscribe: true,
  mailchimpAction: 'https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=3dd26bab04',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: '',
};

export default config;
