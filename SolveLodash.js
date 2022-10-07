import { assign, chain, map } from "lodash"

const loc = [
    { 
        location_key: [32, 22, 11],
        auto_assign: 1
    },
    { 
        location_key: [42, 41],
        auto_assign: 1
    }
]

const bulkConfig = [
    {
        dataValues: {
            config_key: 100
        }
    },
    {
        dataValues: {
            config_key: 200
        }
    }
]

var getConfigs = (locEle, index) => {
    return map(locEle.location_key, (locationKey) => {
        return {
            location_key: locationKey,
            config_key: bulkConfig[index].dataValues.config_key,
            auto_assign: locEle.auto_assign
        }
    })
}

console.log(chain(loc).map(getConfigs).flatten().value());

const config = assign(bulkConfig, loc)

config

var classNames = (conditions) => {
    return chain(conditions).map(function(value, key) {
        return value && key
    }).compact().join(' ').value()
}

const activeClasses = classNames({
    item: 'true',
    isActive: false,
    'item-highlight': true
})

activeClasses
