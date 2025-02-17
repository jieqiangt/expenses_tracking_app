from utils.db_utils import create_sql_engine, execute_query, read_sql_file
import pandas as pd
import os

DATABASE_TABLES = ['trs_users','dim_dates','dim_categories','trs_recur_expenses','trs_expenses']

def drop_tables(conn):

    for table in DATABASE_TABLES:
        params = {'table': table}
        query = read_sql_file('./sql/general/drop_table.sql', params)
        execute_query(conn, query, commit=True)

def create_tables(conn):    
    
    root_folder = './sql/create_table'
    for table in DATABASE_TABLES:
        create_table_file_path = os.path.join(root_folder,f'{table}.sql')
        query = read_sql_file(create_table_file_path)
        execute_query(conn, query, commit=True);
            
def initialize_db_settings(conn):
    
    query = read_sql_file('./sql/general/citext.sql')
    execute_query(conn, query, commit=True);
    
            
def seed_tables(conn):
    
    root_folder = './backup'
    for table in DATABASE_TABLES:
        file_path = os.path.join(root_folder,f'{table}.csv')
        data = pd.read_csv(file_path)
        data.drop(columns=['id'],inplace=True)
        date_cols = ['exp_date','recurring_start','recurring_end','created_on', 'updated_on']
        for col in data.columns:                
            if col in date_cols:
                data[col] = pd.to_datetime(data[col],dayfirst=True, format='mixed')
        data.to_sql(table, con=conn, if_exists='append', index=False)
            
def backup_tables(conn):
    
    root_folder = './backup'
    for table in DATABASE_TABLES:
        params = {'table': table}
        query = read_sql_file(f'./sql/general/query_all_from_table.sql', params)
        data = pd.read_sql(query, conn)
        file_path = os.path.join(root_folder,f'{table}.csv')
        data.to_csv(file_path,index=False)
    
        
