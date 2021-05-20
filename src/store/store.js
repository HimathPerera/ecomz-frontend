const state = {
  userDetails: {},
  storeDetails: {}
};
const mutations = {
  setUserDetails(state, payload) {
    state.userDetails = payload;
  },
  setShopItems(state, payload) {
    state.storeDetails = payload;
  }
};
const actions = {
  ///////////register user action/////////////////
  registerUser({ commit }, payload) {
    const reqbody = {
      query: `mutation{
       createUser(userInput:{email:"${payload.email}",password:"${payload.password}"}){
         email,
         token,
         isAdmin
       }
     }`
    };
    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(reqbody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        commit("setUserDetails", {
          email: resData.data.createUser.email,
          token: resData.data.createUser.token,
          isAdmin: resData.data.createUser.isAdmin
        });
        this.$router.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  },
  /////////////loginUser/////////////
  loginUser({ commit }, payload) {
    const reqbody = {
      query: `query{
      login(email:"${payload.email}",password:"${payload.password}"){
        token,
        isAdmin,
        email
     }
   }
   `
    };
    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(reqbody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        commit("setUserDetails", {
          email: resData.data.login.email,
          token: resData.data.login.token,
          isAdmin: resData.data.login.isAdmin
        });
        this.$router.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  },
  /////////////////logout///////////////
  logout({ commit }) {
    commit("setUserDetails", {});
    this.$router.push("/auth");
  },
  ////////////////getItems///////////
  getAllItems({ commit }) {
    const reqbody = {
      query: `query{
      items{
        name,
        price,
        _id,
        description,
     }
   }
   `
    };
    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(reqbody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        commit("setShopItems", {
          data: resData.data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
