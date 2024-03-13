<template>
    <div class="container">
        <div class="containerPack">
            <h1 class="calculator">Backpack Calculator</h1>
            <div class="columns is-multiline">
                <div class="column is-half" v-for="(item, i) in items" :key="i">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">{{ item.name }}</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="item.weight" @keyup.enter="calculateTotalWeight">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-container">
            <button @click="calculateTotalWeight" class="button">Add Weights Together</button>
        </div>
        <div class="switchbox">
            Show in KG
        <label class="switch" > 
            <input type="checkbox" v-model="useKg"> 
            <span class="slider round"></span>
        </label>
        </div>
            <table v-if="weights.length > 0" class="table">
                <thead>
                    <tr>
                        <th>Weight ({{ useKg ? 'kg' : 'lbs' }})</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(weight, i) in weights" :key="i">
                        <td>{{ useKg ? (weight / 0.45359237).toFixed(2) : weight.toFixed(2) }}</td>
                    </tr>
                </tbody>
            </table>
            <p class="total">Total Weight: {{ totalWeight !== null ? (useKg ? (totalWeight / 0.45359237).toFixed(2) : totalWeight.toFixed(2)) : '0' }} {{ useKg ? 'kg' : 'lbs' }}</p>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            items: [
                { name: 'Backpack', weight: '' },
                { name: 'Sleeping Bag', weight: '' },
                { name: 'Shelter', weight: ''},
                { name: 'Sleeping Pad', weight: '' },
                { name: 'Ground Cloth', weight: '' },
                { name: 'Rain Jacket', weight: ''},
                { name: 'Rain Pants/Skirt', weight: '' },
                { name: 'Rain Cover/ Rain Liner', weight: '' },
                { name: 'Jacket', weight: ''},
                { name: 'Hood', weight: ''},
                { name: 'Hat', weight: ''},
                { name: 'Sleeping cloths', weight: ''},
                { name: 'Town cloths', weight: ''},
                { name: 'Gloves', weight: ''},
                { name: 'Camp Sandals', weight: ''},
                { name: 'Socks', weight: ''},
                { name: 'Underwear', weight: ''},
                { name: 'Water Treatment', weight: ''},
                { name: 'Water Bottle', weight: ''},
                { name: 'Stove', weight: ''},
                { name: 'Utensils', weight: ''},
                { name: 'Fuel', weight: ''},
                { name: 'Bear bag', weight: ''},
                { name: 'First Aid', weight: ''},
                { name: 'Hygiene kit', weight: ''},
                { name: 'Sunglasses', weight: ''},
                { name: 'Smartphone & Charger', weight: ''},
                { name: 'Emergency Device', weight: ''},
                { name: 'Others', weight: ''},

            ],
            weights: [],
            totalWeight: null,
            useKg: false
        };
    },
    methods: {
        calculateTotalWeight() {
            let totalWeight = 0;
            for (let item of this.items) {
                let weight = parseFloat(item.weight);
                if (!isNaN(weight)) {
                    totalWeight += weight;
                }
            }
            this.totalWeight = totalWeight;
        }
    },
    
    watch: {
        useKg(newVal, oldVal) {
            if (oldVal !== newVal) {
                // Recalculate total weight when the unit preference changes
                this.calculateTotalWeight();
            }
        }
    }
};
</script>

<style>
.switchbox{
    display: flex;
    justify-content: center;
    margin-top: 2%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 18px;
}


.switch input {
  opacity: 0;

}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #f39c21;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


.slider.round {
  border-radius: 10px;
}

.slider.round:before {
  border-radius: 50%;
}

.container {
  display: flex;
  justify-content: center; 
  align-items: center;
  max-width: 800px;

}

.containerPack {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  width: 70%; 
  padding-left: 5%;
  margin: 5%;



}
.calculator{
    display: flex;
    justify-content: center;
    font-size: 40px;
    color: white;
    margin-bottom: 5%;
}
.field-label .label {
    color: rgba(255, 255, 255, 0.718); 
}

.input{
    width: 70%;
    display: flex;

}

.field-label {
  width: 10%;
  margin-right: 30px;
}

.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px; 
}

.total{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    font-size: 20px;
    margin-bottom: 5%;
}

</style>