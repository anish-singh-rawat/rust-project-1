// use std::collections::HashMap;
use ic_stable_structures::StableBTreeMap;
use crate::{Analytics, DaoDetails, Memory};
use candid::Principal;
use crate::types::{UserProfile,PostInfo};
// use std::collections::BTreeMap;



pub struct State {

    pub user_profile : StableBTreeMap<Principal, UserProfile,Memory>,

    pub post_detail:StableBTreeMap<String,PostInfo,Memory>,

    pub dao_details: StableBTreeMap<String, DaoDetails, Memory>,
    
    pub analytics_content: StableBTreeMap<u64, Analytics, Memory>,
    
    payment_recipient: Option<Principal>,
}

impl State {
  
    pub fn new() -> Self {
        Self {

            user_profile: init_file_contents(),
            post_detail:post_file_contents(),
            dao_details: dao_file_contents(),
            analytics_content: analytics_content(),
            payment_recipient: None

        }
    }

    pub fn get_payment_recipient(&self) -> Principal {
        self.payment_recipient.unwrap()
    }

    pub fn set_payment_recipient(&mut self, principal: Principal) {
        self.payment_recipient = Some(principal);
    }

}




fn init_file_contents() -> StableBTreeMap<Principal, UserProfile,Memory> {
    StableBTreeMap::init(crate::memory::get_postdata_memory())

}

fn post_file_contents() -> StableBTreeMap<String,PostInfo,Memory> {
    StableBTreeMap::init(crate::memory::get_user_memory())

}

fn dao_file_contents() -> StableBTreeMap<String, DaoDetails, Memory> {
    StableBTreeMap::init(crate::memory::get_dao_memory())
}
fn analytics_content() -> StableBTreeMap<u64, Analytics, Memory> {
    StableBTreeMap::init(crate::memory::get_analytics_memory())
}



impl Default for State {
    fn default() -> Self {
        State::new()
    }
}