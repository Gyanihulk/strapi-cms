import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SharedFaqQAndA extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_q_and_as';
  info: {
    displayName: 'Faq Q&A';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface SharedLocationPageBlogs extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_page_blogs';
  info: {
    displayName: 'Location Page Blogs';
  };
  attributes: {
    banners: Schema.Attribute.Component<'shared.banner', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SharedLocationPageFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_page_faqs';
  info: {
    displayName: 'Location Page FAQ';
  };
  attributes: {
    faq: Schema.Attribute.Component<'shared.faq-q-and-a', true>;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedLocationPageMission extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_page_missions';
  info: {
    displayName: 'Location Page Mission';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgOne: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgOneText: Schema.Attribute.String;
    imgThree: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgThreeText: Schema.Attribute.String;
    imgTwo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgTwoText: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedLocationPageRentingFleet extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_page_renting_fleets';
  info: {
    displayName: 'Location Page Renting Fleet';
  };
  attributes: {
    Heading: Schema.Attribute.String;
  };
}

export interface SharedLocationPageService extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_page_services';
  info: {
    displayName: 'Location Page Service';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imgFive: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imgFiveText: Schema.Attribute.String;
    imgFour: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgFourText: Schema.Attribute.String;
    imgOne: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgOneText: Schema.Attribute.String;
    imgSix: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imgSixText: Schema.Attribute.String;
    imgThree: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgThreeText: Schema.Attribute.String;
    imgTwo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgTwoText: Schema.Attribute.String;
  };
}

export interface SharedLocationPageTopFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_page_top_footers';
  info: {
    description: '';
    displayName: 'Location Page Top footer';
  };
  attributes: {
    jsxDetails: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    jsxSnippet: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    metaData: Schema.Attribute.Component<'shared.meta-data', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetaData extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_data';
  info: {
    displayName: 'metaData';
  };
  attributes: {
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTopBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_top_banners';
  info: {
    description: '';
    displayName: 'locationPageTopBanner';
  };
  attributes: {
    backgroungImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner': SharedBanner;
      'shared.faq-q-and-a': SharedFaqQAndA;
      'shared.location-page-blogs': SharedLocationPageBlogs;
      'shared.location-page-faq': SharedLocationPageFaq;
      'shared.location-page-mission': SharedLocationPageMission;
      'shared.location-page-renting-fleet': SharedLocationPageRentingFleet;
      'shared.location-page-service': SharedLocationPageService;
      'shared.location-page-top-footer': SharedLocationPageTopFooter;
      'shared.media': SharedMedia;
      'shared.meta-data': SharedMetaData;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.top-banner': SharedTopBanner;
    }
  }
}
