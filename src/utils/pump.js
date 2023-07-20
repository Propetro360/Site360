export const convertIntelliData = (d) => {
  return Object.entries(d)
    .map(([k, v], i) => {
      const m = {};
      if (v.some((x) => x.value > 0)) {
        v.forEach((p) => {
          m[p.mnemonic_name] = Number(p.value).toFixed(1);
        });
        return { ...m, "Pump Position": k };
      } else {
        return null;
      }
    }).filter(x => !!x)
    .sort((a, b) => a["Pump Position"].localeCompare(b["Pump Position"]));
};
