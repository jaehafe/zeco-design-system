interface FieldError {
  [key: string]: {
    message: string;
  };
}

const useDuplicateIndexes = (
  data: FieldError[] | undefined,
  propertyName: string,
  keyword: string,
): Set<number> => {
  if (!Array.isArray(data)) {
    return new Set<number>();
  }

  const indexMap = new Map<string, number>();
  const duplicateIndexes = new Set<number>();

  data.forEach((error, index) => {
    if (error && error[propertyName] && error[propertyName].message.includes(keyword)) {
      const key = error[propertyName].message;
      if (indexMap.has(key)) {
        duplicateIndexes.add(index);
        duplicateIndexes.add(indexMap.get(key)!);
      } else {
        indexMap.set(key, index);
      }
    }
  });

  return duplicateIndexes;
};

export default useDuplicateIndexes;
