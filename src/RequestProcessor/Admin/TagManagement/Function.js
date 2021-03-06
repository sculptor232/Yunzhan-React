import Functions from '../../../Function';
import {adminPrefix} from '../Functions';

const {removePrependSlashes} = Functions;

export function tagManagementPrefix(url)
{
    url = removePrependSlashes(url);
    return adminPrefix(`/tagManagement/${url}`);
}
