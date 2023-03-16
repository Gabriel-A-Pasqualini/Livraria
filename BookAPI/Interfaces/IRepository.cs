using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace BookAPI.Interfaces
{
    public interface IRepository<T>
    {
        int Update(T entity);
        int Insert(T entity);
        int Insert(IEnumerable<T> entities);
        int Delete(T entity);
        int DeleteBy(Expression<Func<T, bool>> where);
        IQueryable<T> GetAll();
        IQueryable<T> GetBy(Func<T, bool> where);
    }
}