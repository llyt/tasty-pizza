import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/user'
import styles from './History.module.sass'
import dynamic from 'next/dynamic'
import Button from '../Button/Button'
import HistoryList from '../HistoryList/HistoryList'

const InputMask = dynamic(
  () => import('react-input-mask'),
  { ssr: false }
)

const History = () => {
  const dispatch = useDispatch()
  const {
    isLoading,
    phone,
    history
  } = useSelector((state) => state.user)
  useEffect(() => {
    loadHistory()
  }, [])

  function loadHistory() {
    dispatch(userActions.loadOrdersHistory())
  }

  function handleHistoryInput(event) {
    const { name, value } = event.target
    dispatch(userActions.handleContactInput(name, value))
  }

  return (
    <div className='container'>
      <div className={styles.History}>
        <h1>Orders history</h1>
        <div className={styles.Form}>
          <InputMask
            mask='+7 (\999) 999-99-99'
            value={phone}
            alwaysShowMask
            onChange={handleHistoryInput}
            name='phone'

          />
          <Button
            action={loadHistory}
            solid
            disabled={isLoading}
          >
            Check
          </Button>
        </div>
        {history && <HistoryList list={history}/>}
      </div>
    </div>
  )
}

export default History
