/* eslint-disable no-undef, max-len */
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import {AppContext} from '../../common/AppContext';

const useDataFetching = dataSource => {
  const {user} = useContext(AppContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (dataSource) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const {data: response} = await axios.get(`${process.env.REACT_APP_API_URL}${dataSource}`, {
            headers: {token: user.token},
          });
          response.error && setError(response.error);

          if (response && !response.error) {
            setData(response);
          }
        } catch (err) {
          setError(err.message);
        }
        setLoading(false);
      };
      fetchData();
    }

    return () => {};
  }, [user, dataSource]);

  return {
    data,
    error,
    loading,
  };
};

export default useDataFetching;
