import EventService from "@/services/EventService.js";

export const state = {
  events: [],
  eventsTotal: Number,
  event: {}
};

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id);
  }
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
  SET_EVENTTOTAL(state, eventCount) {
    state.eventsTotal = eventCount;
  },
  SET_USERNAME(state, { id, name }) {
    state.user.name = name;
    state.user.id = id;
  }
};

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit("ADD_EVENT", event);
    });
  },

  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(res => {
        commit("SET_EVENTTOTAL", res.headers["x-total-count"]);
        commit("SET_EVENTS", res.data);
      })
      .catch(error => console.log(error));
  },
  fetchEvent({ commit }, id) {
    const event = this.getters.getEventById(id);

    if (event) {
      commit("SET_EVENT", event);
    } else {
      EventService.getEvent(id)
        .then(res => {
          commit("SET_EVENT", res.data);
        })
        .catch(error => console.log(error));
    }
  },
  createUser({ commit }, user) {
    commit("SET_USERNAME", user);
  }
};
