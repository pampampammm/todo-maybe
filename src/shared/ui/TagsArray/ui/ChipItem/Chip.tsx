// import React from 'react';
// import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// import { Tag } from '../../types/Tag';
//
// import styles from './Chip.module.scss';
//
// export enum ChipButtonType {
//     DELETE='delete',
//     ADD='add',
//     NOTHING='nothing'
// }
//
// interface ChipProps {
//     item: Tag,
//     onChange?: (items: Tag) => void,
//     className?: string,
//     haveButton?: boolean
// }
//
// const ChipComponent = (props: ChipProps) => {
//     const {
//         item,
//         onChange,
//         className,
//         haveButton,
//     } = props;
//     const { id, value } = item;
//
//     const handleButtonClick = () => {
//
//     };
//
//     return (
//         <div
//             className={styles.item}
//         >
//             {value}
//             {haveButton
//                 && (
//                     <Button
//                         className={styles.itemAddBtn}
//                         type="button"
//                         theme={ButtonTheme.CLEAR}
//                         onClick={handleButtonClick}
//                     >
//                         +
//                     </Button>
//                 )}
//         </div>
//     );
// };
//
// export default ChipComponent;
