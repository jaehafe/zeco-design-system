interface HouseTypeFieldType {
  houseTypeSettings: {
    name: string;
    privateArea: string;
    commonArea: string;
    id?: string | null | undefined;
  }[];
}

interface HouseInfoFieldType {
  houseInfoSettings: {
    houseType: string;
    id?: string | null | undefined;
    houseNum: string;
    facilityType: string;
  }[];
}

export const useDeleteSelectedRows = (
  houseTypeFields: any,
  houseTypeCheckState: Map<string, boolean>,
  remove: any,
): void => {
  const itemsToDelete = Array.from(houseTypeCheckState.entries())
    .filter(([, isChecked]) => isChecked)
    .map(([id]) => id);

  const sortedItemsToDelete = itemsToDelete
    .slice()
    .sort(
      (a, b) =>
        houseTypeFields.findIndex((field) => field.id === b) - houseTypeFields.findIndex((field) => field.id === a),
    );

  sortedItemsToDelete.forEach((id) => {
    const index = houseTypeFields.findIndex((field) => field.id === id);
    if (index !== -1) {
      remove(index);
    }
  });
};

export default useDeleteSelectedRows;
