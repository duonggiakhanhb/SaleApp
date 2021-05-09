import {CATEGORIES, MEALS} from "../data/dummy-data";
export default {
    async fetchInitialDeals() {
        try {
            const response = CATEGORIES;
            return response;
        } catch(error) {
            console.error(error);
        }
    },
    async fetchMealList(dealId, fav, cate) {
        try {
            let response = [];
            if(cate){
                response = await MEALS.filter(
                    (meal) => meal.categoryIds.indexOf(dealId) >=0 );
            }
            else {
                await fav.map((id) => { response = response.concat(MEALS.filter(
                    (meal) => meal.id == id))});
            }
            return response;
        } catch(error) {
            console.error(error);
        }
    },
    async getMealDetail(mealId) {
        try {
            const response = await MEALS.find((meal) =>
                meal.id === mealId
            )
            return response;
        } catch(error) {
            console.error(error);
        }
    },

};
