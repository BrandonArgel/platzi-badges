import React, { Component } from "react";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import "./styles/Badges.css";
import confLogo from "../img/badge-header.svg";
import { Link } from "react-router-dom";
// import api from "../api";

export class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: [],
  };

  componentDidMount() {
    this.fetchData();

    // this.intervalId = setInterval(this.fetchData, 5000)
  }

  // componentWillUnmount(){
  //   clearInterval(this.intervalId);
  // }

  fetchData = async () => {
    this.setState({
      data: {
        badges: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freddy",
            lastName: "Vega",
            email: "freddy@gmail.com",
            jobTitle: "CEO at Platzi",
            twitter: "Freddier",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
          },
          {
            id: "1921a734-cc05-4f71-a677-ffe38dda6958",
            firstName: "Maude",
            lastName: "Effertz",
            email: "Dan_Weimann0@yahoo.com",
            jobTitle: "Product Solutions Analyst",
            twitter: "MaudeEffertz73114",
            avatarUrl:
              "https://www.gravatar.com/avatar/01d0de92ec9ca4fdfbb99edf6a1abfea?d=identicon",
          },
          {
            id: "3629db36-14f9-4f24-b139-200f3a1b9af7",
            firstName: "Breanna",
            lastName: "Runolfsdottir",
            email: "Laurianne.Lynch@gmail.com",
            jobTitle: "Lead Marketing Director",
            twitter: "BreannaRunolfsdottir",
            avatarUrl:
              "https://www.gravatar.com/avatar/684697e194c66d338c5ee91d030121cc?d=identicon",
          },
          {
            id: "8c734836-1f7a-4493-b903-37db30fc7224",
            firstName: "Jan",
            lastName: "Oberbrunner",
            email: "Estella8@gmail.com",
            jobTitle: "Regional Data Assistant",
            twitter: "JanOberbrunner",
            avatarUrl:
              "https://www.gravatar.com/avatar/7a4de3ec254747b304a82a14270e72be?d=identicon",
          },
          {
            id: "04479bae-a34a-448e-bb20-a10920d48c1f",
            firstName: "Kaelyn",
            lastName: "Hoppe",
            email: "Deshaun_Steuber@gmail.com",
            jobTitle: "Senior Implementation Architect",
            twitter: "KaelynHoppe15215",
            avatarUrl:
              "https://www.gravatar.com/avatar/d5a91308668dd768e955e2efd0fcdb37?d=identicon",
          },
          {
            id: "eb28f57f-6448-4d40-8f57-8db27831a605",
            firstName: "Myrtle",
            lastName: "Torphy",
            email: "Torrance.Gaylord@yahoo.com",
            jobTitle: "Lead Directives Liaison",
            twitter: "MyrtleTorphy",
            avatarUrl:
              "https://www.gravatar.com/avatar/03b84b35e3a31f091a07910da97ff46a?d=identicon",
          },
          {
            id: "052e04c9-6386-400c-8794-c1ac8f794a75",
            firstName: "Pamela",
            lastName: "Ritchie",
            email: "Daren95@yahoo.com",
            jobTitle: "Legacy Operations Facilitator",
            twitter: "PamelaRitchie48620",
            avatarUrl:
              "https://www.gravatar.com/avatar/9ffc47916a084028d7a6436531077852?d=identicon",
          },
          {
            id: "67565eb7-9738-4dab-8b10-081d3dcff01d",
            firstName: "Devin",
            lastName: "Bartell",
            email: "Dean80@hotmail.com",
            jobTitle: "National Mobility Administrator",
            twitter: "DevinBartell94456-3248",
            avatarUrl:
              "https://www.gravatar.com/avatar/714a712dc155ccc6b0d825dbc258ec0d?d=identicon",
          },
          {
            id: "aa98596d-fea6-4686-90e1-93514b6dc011",
            firstName: "Antwan",
            lastName: "Walker",
            email: "Isom.Zboncak@yahoo.com",
            jobTitle: "Central Paradigm Executive",
            twitter: "AntwanWalker",
            avatarUrl:
              "https://www.gravatar.com/avatar/45273652dd6323b8a2378e3208436180?d=identicon",
          },
          {
            id: "62579a13-8ae5-4831-9138-871c00823f53",
            firstName: "King",
            lastName: "Hermiston",
            email: "Pearl80@hotmail.com",
            jobTitle: "Direct Usability Technician",
            twitter: "KingHermiston36255",
            avatarUrl:
              "https://www.gravatar.com/avatar/c4779957b19b80438e651f6ca4c2107e?d=identicon",
          },
          {
            id: "6ffbc836-772b-430d-9576-74826557d073",
            firstName: "Jamil",
            lastName: "Fay",
            email: "Guillermo_Murazik@yahoo.com",
            jobTitle: "Central Quality Strategist",
            twitter: "JamilFay04425",
            avatarUrl:
              "https://www.gravatar.com/avatar/575212144322f08e35ba9ab0b43089da?d=identicon",
          },
          {
            id: "925952de-f43d-49c3-8e04-98f1c6b9e3e6",
            firstName: "Jasen",
            lastName: "Kulas",
            email: "Frieda89@yahoo.com",
            jobTitle: "Senior Research Consultant",
            twitter: "JasenKulas35396-9255",
            avatarUrl:
              "https://www.gravatar.com/avatar/0b7dc92c5cbcc2159b5ed9cb5d074867?d=identicon",
          },
          {
            id: "7b8ac914-bb9d-4649-9ddd-fe1de2b82e79",
            firstName: "Paul",
            lastName: "Miller",
            email: "Dock5@gmail.com",
            jobTitle: "Lead Solutions Designer",
            twitter: "PaulMiller12518-9290",
            avatarUrl:
              "https://www.gravatar.com/avatar/17c1b1c79e9dfcb34e45561f06d704e6?d=identicon",
          },
          {
            id: "02c0eae9-96e3-4527-a2c2-f2274bb4f3cf",
            firstName: "Rebeca",
            lastName: "Heller",
            email: "Jayce_Greenholt72@gmail.com",
            jobTitle: "Product Directives Coordinator",
            twitter: "RebecaHeller98352",
            avatarUrl:
              "https://www.gravatar.com/avatar/44962f9da66827c0896a1e567a9d9669?d=identicon",
          },
          {
            id: "5f9b5d9f-4225-4706-b3b3-330762447071",
            firstName: "Maynard",
            lastName: "Rowe",
            email: "Ressie79@yahoo.com",
            jobTitle: "Dynamic Creative Engineer",
            twitter: "MaynardRowe74584",
            avatarUrl:
              "https://www.gravatar.com/avatar/4626f448a94e6d7c81c7bc3f7fc160da?d=identicon",
          },
          {
            id: "e559bea7-1457-4dcd-89c4-0b07b1fc03eb",
            firstName: "Cathrine",
            lastName: "Funk",
            email: "Bailey.Koelpin38@gmail.com",
            jobTitle: "District Marketing Agent",
            twitter: "CathrineFunk84339",
            avatarUrl:
              "https://www.gravatar.com/avatar/124ebc497cd4c3d05fd6151de5b8b8d7?d=identicon",
          },
          {
            id: "246ccd9c-d5d8-49be-9a9c-f3d10ed3c127",
            firstName: "Theresa",
            lastName: "Rice",
            email: "Cornelius_Kris@hotmail.com",
            jobTitle: "Dynamic Optimization Manager",
            twitter: "TheresaRice47212",
            avatarUrl:
              "https://www.gravatar.com/avatar/acc0c2cda0b3949624a6dde7ffa94ef1?d=identicon",
          },
          {
            id: "bae925d9-a591-436b-9b74-e0d72fe1ad70",
            firstName: "Arno",
            lastName: "Murphy",
            email: "Elva_Kuhn@gmail.com",
            jobTitle: "Corporate Division Strategist",
            twitter: "ArnoMurphy10406",
            avatarUrl:
              "https://www.gravatar.com/avatar/d7f60c716fefed867e6478ba28a49199?d=identicon",
          },
          {
            id: "72b9a910-be64-4c15-b916-c3b4cbc70bb2",
            firstName: "Lewis",
            lastName: "Kreiger",
            email: "Juanita0@hotmail.com",
            jobTitle: "Principal Integration Officer",
            twitter: "LewisKreiger60407",
            avatarUrl:
              "https://www.gravatar.com/avatar/c78ed3b6e05aa42603702c2fb08950e1?d=identicon",
          },
          {
            id: "be1f4d67-9c83-4e01-8991-514e3af047b3",
            firstName: "Makenzie",
            lastName: "Effertz",
            email: "Charles.Parker56@yahoo.com",
            jobTitle: "Global Quality Orchestrator",
            twitter: "MakenzieEffertz56304",
            avatarUrl:
              "https://www.gravatar.com/avatar/ea9dcdb8b7f12c063f3bf4837f495063?d=identicon",
          },
          {
            id: "d197cc17-70bd-4052-a8ff-14697cce07a2",
            firstName: "Alda",
            lastName: "Mayert",
            email: "Royal_Mraz@hotmail.com",
            jobTitle: "Internal Interactions Analyst",
            twitter: "AldaMayert61781",
            avatarUrl:
              "https://www.gravatar.com/avatar/b6ba63c9ce0aff74406d3c7cef514678?d=identicon",
          },
          {
            id: "29b5a744-5d7f-4d33-b9fd-c8ca639dc030",
            firstName: "Karl",
            lastName: "Dietrich",
            email: "Haleigh.Rempel94@yahoo.com",
            jobTitle: "Future Research Engineer",
            twitter: "KarlDietrich34710-7990",
            avatarUrl:
              "https://www.gravatar.com/avatar/b7cad398bf44ade9fa2937e0fa5dcf3e?d=identicon",
          },
          {
            id: "9919739d-7362-4b57-b76e-98546ec1b555",
            firstName: "Doug",
            lastName: "Roob",
            email: "Pat.Rolfson@yahoo.com",
            jobTitle: "Legacy Security Coordinator",
            twitter: "DougRoob39203",
            avatarUrl:
              "https://www.gravatar.com/avatar/705f2c8baba0753f69de366d10797d34?d=identicon",
          },
          {
            id: "92e7da01-75e1-401a-80ab-11e97d14f87a",
            firstName: "Patricia",
            lastName: "Koch",
            email: "Eula98@yahoo.com",
            jobTitle: "Legacy Paradigm Developer",
            twitter: "PatriciaKoch50746",
            avatarUrl:
              "https://www.gravatar.com/avatar/d7be7c9206d8bdf7b99a61802ef42bfc?d=identicon",
          },
          {
            id: "ea5640b9-3177-47bb-8fe4-25338c43e66c",
            firstName: "Arno",
            lastName: "Murphy",
            email: "Raegan_Morar59@hotmail.com",
            jobTitle: "Lead Intranet Architect",
            twitter: "ArnoMurphy78604-9408",
            avatarUrl:
              "https://www.gravatar.com/avatar/70b2d26d624ea573e2f4092d6656fe1f?d=identicon",
          },
          {
            id: "058d574c-4b67-4607-aae5-d00cfe257182",
            firstName: "Emile",
            lastName: "Paucek",
            email: "Titus_Cremin15@yahoo.com",
            jobTitle: "Internal Marketing Manager",
            twitter: "EmilePaucek04688",
            avatarUrl:
              "https://www.gravatar.com/avatar/6d395ba4955de273f3f28f9fa0a6641b?d=identicon",
          },
          {
            id: "ec9c5695-3a42-45ef-a273-d4c80c0e8f27",
            firstName: "Zoey",
            lastName: "Wiegand",
            email: "Friedrich_OConner35@yahoo.com",
            jobTitle: "Future Accounts Technician",
            twitter: "ZoeyWiegand43509",
            avatarUrl:
              "https://www.gravatar.com/avatar/82d4628e093cad1bdcfb24e5eecd815d?d=identicon",
          },
          {
            id: "1c72396b-5dfc-4574-b36e-9ffdfebfba64",
            firstName: "Ian",
            lastName: "Heaney",
            email: "Alexys.Gutkowski34@yahoo.com",
            jobTitle: "Direct Optimization Specialist",
            twitter: "IanHeaney66784",
            avatarUrl:
              "https://www.gravatar.com/avatar/097d0e30a04e69b707b08cdad62ffdd2?d=identicon",
          },
          {
            firstName: "Richard",
            lastName: "Kaufman López",
            email: "richardbkaufman@gmail.com",
            avatarUrl:
              "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon",
            jobTitle: "Frontend Engineer @ Kickass Partners",
            twitter: "sparragus",
            id: "EYR2BVQ",
          },
          {
            firstName: "Brandon",
            lastName: "Argel",
            email: "brandargel@gmail.com",
            jobTitle: "Frontend Developer",
            twitter: "BrandonArgelVD",
            id: "w5UDdSd",
          },
        ],
      },
    });

    this.setState({ loading: false, data: data });

    // try {
    //   const data = await api.badges.list();
    //   this.setState({ loading: false, data: data });
    // } catch (error) {
    //   this.setState({ loading: false, error: error });
    // }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/ReactJS/badges/new">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
