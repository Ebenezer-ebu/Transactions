export function groupData(data) {
  const groups = data.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      details: groups[date],
    };
  });

  return groupArrays;
}

export function filtered(flag, data) {
  return data.filter((info) => info.type.toLowerCase() === flag.toLowerCase());
}

export function searchInput(flag, data) {
  return data.filter(
    (info) =>
      info.type.toLowerCase().includes(flag.toLowerCase()) ||
      info.status.toLowerCase().includes(flag.toLowerCase()) ||
      info.name.toLowerCase().includes(flag.toLowerCase())
  );
}
