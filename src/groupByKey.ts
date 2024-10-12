type GroupsMap<T> = {
  [key: string]: T[];
};

type Value = string | number;

type Obj = {
  [key: string]: Value;
};

export function groupByKey(items: Obj[], key: keyof Obj): GroupsMap<Obj> {
  const result: GroupsMap<Obj> = {};
  const moddedItems = items.map((item1) => {
    const arrayForItems: Obj[] = [];

    items.filter((item2) => {
      if (item2[key] === item1[key]) {
        arrayForItems.push(item2);

        return true;
      }

      return false;
    });

    if (arrayForItems.length === 1) {
      return arrayForItems[0];
    }

    return arrayForItems;
  });

  items.forEach((item, index) => {
    if (Array.isArray(moddedItems[index])) {
      result[item[key]] = moddedItems[index];
    } else {
      result[item[key]] = [moddedItems[index]];
    }
  });

  return result;
}
