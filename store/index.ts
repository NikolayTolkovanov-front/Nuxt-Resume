import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    projectsHeading: "Портфолио проектов",
    projectsFilterHeading: "Поиск проектов по названию и категории",
    noProjectsText: "Нет проектов :(",
    projects: [
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
        title: "Moreodor",
        category_id: 2,
        img: "images/web-project-2.jpg",
        publishDate: "Nov 04, 2021",
        tag: "UI / Frontend",
        clientTitle: "About Client",
        objectivesTitle: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        techTitle: "Tools & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Share This",
        projectImages: [
          {
            id: uuidv4(),
            title: "Uber Project Management UI",
            img: "../images/ui-project-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Uber Project Management UI",
            img: "../images/web-project-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Uber Project Management UI",
            img: "../images/web-project-2.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://company.com",
          },
          {
            id: uuidv4(),
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Nuxt.js",
          "TailwindCSS",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
        title: "Phoenix Digital Agency",
        category_id: 1,
        img: "images/mobile-project-2.jpg",
        publishDate: "Nov 04, 2021",
        tag: "UI / Frontend",
        clientTitle: "About Client",
        objectivesTitle: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        techTitle: "Tools & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Share This",
        projectImages: [
          {
            id: uuidv4(),
            title: "Phoenix Digital Agency",
            img: "../images/mobile-project-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Phoenix Digital Agency",
            img: "../images/web-project-2.jpg",
          },
          {
            id: uuidv4(),
            title: "Phoenix Digital Agency",
            img: "../images/mobile-project-2.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://company.com",
          },
          {
            id: uuidv4(),
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Nuxt.js",
          "TailwindCSS",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
        title: "Project Management UI",
        category_id: 1,
        img: "images/ui-project-1.jpg",
        publishDate: "Nov 04, 2021",
        tag: "UI / Frontend",
        clientTitle: "About Client",
        objectivesTitle: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        techTitle: "Tools & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Share This",
        projectImages: [
          {
            id: uuidv4(),
            title: "Project Management UI",
            img: "../images/mobile-project-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Project Management UI",
            img: "../images/web-project-2.jpg",
          },
          {
            id: uuidv4(),
            title: "Project Management UI",
            img: "../images/mobile-project-2.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://company.com",
          },
          {
            id: uuidv4(),
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Nuxt.js",
          "TailwindCSS",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
        title: "Cloud Storage Platform",
        category_id: 2,
        img: "images/ui-project-2.jpg",
        publishDate: "Nov 04, 2021",
        tag: "Web / Frontend",
        clientTitle: "About Client",
        objectivesTitle: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        techTitle: "Tools & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Share This",
        projectImages: [
          {
            id: uuidv4(),
            title: "Cloud Storage Platform",
            img: "../images/web-project-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Cloud Storage Platform",
            img: "../images/web-project-2.jpg",
          },
          {
            id: uuidv4(),
            title: "Cloud Storage Platform",
            img: "../images/mobile-project-2.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://company.com",
          },
          {
            id: uuidv4(),
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Nuxt.js",
          "TailwindCSS",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
        title: "Uber Social App",
        category_id: 2,
        img: "images/mobile-project-1.jpg",
        publishDate: "Nov 04, 2021",
        tag: "UI / Mobile",
        clientTitle: "About Client",
        objectivesTitle: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        techTitle: "Tools & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Share This",
        projectImages: [
          {
            id: uuidv4(),
            title: "Uber Social App",
            img: "../images/web-project-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Uber Social App",
            img: "../images/web-project-2.jpg",
          },
          {
            id: uuidv4(),
            title: "Uber Social App",
            img: "../images/mobile-project-2.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://company.com",
          },
          {
            id: uuidv4(),
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Nuxt.js",
          "TailwindCSS",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
        title: "Apple Design System",
        category_id: 1,
        img: "images/web-project-1.jpg",
        publishDate: "Nov 04, 2021",
        tag: "UI / Mobile",
        clientTitle: "About Client",
        objectivesTitle: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        techTitle: "Tools & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Share This",
        projectImages: [
          {
            id: uuidv4(),
            title: "Apple Design System",
            img: "../images/web-project-1.jpg",
          },
          {
            id: uuidv4(),
            title: "Apple Design System",
            img: "../images/web-project-2.jpg",
          },
          {
            id: uuidv4(),
            title: "Apple Design System",
            img: "../images/mobile-project-2.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://company.com",
          },
          {
            id: uuidv4(),
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Nuxt.js",
          "TailwindCSS",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: uuidv4(),
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
      },
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "PHP",
      "Vue.js",
      "Vuex",
      "Pinia",
      "Vuetify",
      "React.js",
      "Redux",
      "jQuery",
      "Sphinx",
      "Node.js",
      "Express.js",
      "Wordpress",
      "Tailwind.css",
      "Bootstrap.css",
      "Docker",
      "Jenkins",
      "MySQL",
    ],
    relatedProjectsHeading: "Похожие проекты",
    technologiesHeading: "Технологии, с которыми работаю",

    aboutMe: [
      {
        id: uuidv4(),
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: uuidv4(),
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
    ],
    copyrightDate: new Date().getFullYear(),
    socialProfiles: [
      {
        id: uuidv4(),
        name: "GitHub",
        icon: "fa6-brands:github",
        url: "https://github.com/NikolayTolkovanov-front",
      },
      {
        id: uuidv4(),
        name: "Telegram",
        icon: "fa6-brands:telegram",
        url: "https://t.me/zorg210780",
      },
      {
        id: uuidv4(),
        name: "VK",
        icon: "fa6-brands:vk",
        url: "https://vk.com/ntolkovanov",
      },
    ],
    socialSharings: [
      {
        id: uuidv4(),
        name: "Telegram",
        icon: "fa6-brands:telegram",
        url: "https://telegram.me/share/url?url=",
      },
      {
        id: uuidv4(),
        name: "Vkontakte",
        icon: "fa6-brands:vk",
        url: "https://vk.com/share.php?url=",
      },
      {
        id: uuidv4(),
        name: "Facebook",
        icon: "fa6-brands:facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=",
      },
    ],
    categories: [
      {
        id: 1,
        value: "landing",
        name: "Лендинг",
      },
      {
        id: 2,
        value: "multipage",
        name: "Многостраничный сайт",
      },
    ],
    contacts: [
      {
        id: 1,
        name: "address",
        data: "Россия, г.Волгоград",
        icon: "fa6-solid:location-dot",
      },
      {
        id: 2,
        name: "email",
        data: "tnrvlg@gmail.com",
        icon: "fa6-solid:envelope",
      },
      {
        id: 3,
        name: "phone",
        data: "+7 996 484 69 19",
        icon: "fa6-solid:phone",
      },
    ],
    successMessage:
      "Ваша заявка успешно отправлена, с вами свяжутся через некоторое время",
    failMessage:
      "К сожалению, ваша заявка не была отправлена, попробуйте через несколько минут или свяжитесь по номеру:",
    siteName: "Nuxt.js & Tailwind CSS Portfolio",
    siteAuthor: "Nikolay Tolkovanov",
  }),

  actions: {},

  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id == id);
    },
    getCategoryById: (state) => (id) => {
      return state.categories.filter((category) => category.id === id)[0].name
    }
  },
});
