import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/StoreProvider';
import { Tag } from '../../types/types';
//
// export const fetchTagsById = createAsyncThunk<Tag, void,
//     { rejectValue: string, extra: ThunkExtraArg }>(
//         'task/fetchTaskByDate',
//         async (arg, thunkAPI) => {
//             const { extra, rejectWithValue } = thunkAPI;
//
//             try {
//                 const response = await extra.api.get<Tag[]>('/tags');
//
//                 return response.data;
//             } catch (e) {
//                 console.log(e);
//                 return rejectWithValue('error');
//             }
//         },
//     );
